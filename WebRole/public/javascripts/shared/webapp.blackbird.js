﻿// ------------------------------------------
// BLACKBIRD LOGGER
// ------------------------------------------

WebAppLoader.addModule({ name: 'blackbird', plugins: ['helper'], hasEvents: true, isShared: true }, function () {

    var blackbird    = {},
        output       = this.getConsole(),
        eventManager = this.getEventManager(),
        helper       = this.getPlugin('helper'),
        initialized  = false;

    var NAMESPACE = 'iosLog';
    var IE6_POSITION_FIXED = true; // enable IE6 {position:fixed}

    var bbird;
    var outputList;
    var cache = [];

    var state = getState();
    var classes = {};
    var profiler = {};
    var IDs = {
        blackbird: 'blackbird',
        checkbox: 'bbVis',
        filters: 'bbFilters',
        controls: 'bbControls',
        size: 'bbSize'
    }
    var messageTypes = { //order of these properties imply render order of filter controls
        debug: true,
        info: true,
        warn: true,
        error: true,
        profile: true
    };

    var isHidden = true;

    function generateMarkup() { //build markup
        var spans = [];
        for (type in messageTypes) {
            spans.push(['<span class="', type, '" type="', type, '"></span>'].join(''));
        }

        var newNode = document.createElement('DIV');
        newNode.id = IDs.blackbird;
        newNode.style.display = 'none';
        newNode.style.marginTop = '48px';
        newNode.innerHTML = [
			'<div class="header">',
				'<div class="left">',
					'<div id="', IDs.filters, '" class="filters" title="click to filter by message type">', spans.join(''), '</div>',
				'</div>',
				'<div class="right">',
					'<div id="', IDs.controls, '" class="controls">',
						'<span id="', IDs.size, '" title="contract" op="resize"></span>',
						'<span class="clear" title="clear" op="clear"></span>',
						'<span class="close" title="close" op="close"></span>',
					'</div>',
				'</div>',
			'</div>',

			'<div class="main">',
				'<div class="left"></div><div class="mainBody">',
					'<ol id="scrollMe">', cache.join(''), '</ol>',
				'</div><div class="right"></div>',
			'</div>',
            '<div class="footer">',
				'<div class="left"><label for="', IDs.checkbox, '"><input type="checkbox" id="', IDs.checkbox, '" />Visible on page load</label></div>',
				'<div class="right"></div>',
			'</div>'
		].join('');
        return newNode;
    }

    function backgroundImage() { //(IE6 only) change <BODY> tag's background to resolve {position:fixed} support
        var bodyTag = document.getElementsByTagName('BODY')[0];

        if (bodyTag.currentStyle && IE6_POSITION_FIXED) {
            if (bodyTag.currentStyle.backgroundImage == 'none') {
                bodyTag.style.backgroundImage = 'url(about:blank)';
            }
            if (bodyTag.currentStyle.backgroundAttachment == 'scroll') {
                bodyTag.style.backgroundAttachment = 'fixed';
            }
        }
    }

    function addMessage(type, content) { //adds a message to the output list
        content = (content.constructor == Array) ? content.join('') : content;
        if (outputList) {
            var newMsg = document.createElement('LI');
            newMsg.className = type;
            newMsg.innerHTML = ['<span class="icon"></span>', content].join('');
            outputList.appendChild(newMsg);
            scrollToBottom();
        } else {
            cache.push(['<li class="', type, '"><span class="icon"></span>', content, '</li>'].join(''));
        }
    }

    function clear() { //clear list output
        outputList.innerHTML = '';
    }

    function clickControl(evt) {
        if (!evt) evt = window.event;
        var el = (evt.target) ? evt.target : evt.srcElement;

        if (el.tagName == 'SPAN') {
            switch (el.getAttributeNode('op').nodeValue) {
                case 'resize': resize(); break;
                case 'clear': clear(); break;
                case 'close': hide(); break;
            }
        }
    }

    function clickFilter(evt) { //show/hide a specific message type
        if (!evt) evt = window.event;
        var span = (evt.target) ? evt.target : evt.srcElement;

        if (span && span.tagName == 'SPAN') {

            var type = span.getAttributeNode('type').nodeValue;

            if (evt.altKey) {
                var filters = document.getElementById(IDs.filters).getElementsByTagName('SPAN');

                var active = 0;
                for (entry in messageTypes) {
                    if (messageTypes[entry]) active++;
                }
                var oneActiveFilter = (active == 1 && messageTypes[type]);

                for (var i = 0; filters[i]; i++) {
                    var spanType = filters[i].getAttributeNode('type').nodeValue;

                    filters[i].className = (oneActiveFilter || (spanType == type)) ? spanType : spanType + 'Disabled';
                    messageTypes[spanType] = oneActiveFilter || (spanType == type);
                }
            }
            else {
                messageTypes[type] = !messageTypes[type];
                span.className = (messageTypes[type]) ? type : type + 'Disabled';
            }

            //build outputList's class from messageTypes object
            var disabledTypes = [];
            for (type in messageTypes) {
                if (!messageTypes[type]) disabledTypes.push(type);
            }
            disabledTypes.push('');
            outputList.className = disabledTypes.join('Hidden ');

            scrollToBottom();
        }
    }

    function clickVis(evt) {
        if (!evt) evt = window.event;
        var el = (evt.target) ? evt.target : evt.srcElement;

        state.load = el.checked;
        setState();
    }


    function scrollToBottom() { //scroll list output to the bottom
        outputList.scrollTop = outputList.scrollHeight;
    }

    function isVisible() { //determine the visibility
        return (bbird.style.display == 'block');
    }

    function hide() {
        bbird.style.display = 'none';
        isHidden = true;
        eventManager.raiseEvent('hide');
    }

    function show() {
        var body = document.getElementsByTagName('BODY')[0];
        body.removeChild(bbird);
        body.appendChild(bbird);
        bbird.style.display = 'block';
        isHidden = false;
        eventManager.raiseEvent('show');
    }

    //sets the position
    function reposition(position) {
        if (position === undefined || position == null) {
            position = (state && state.pos === null) ? 1 : (state.pos + 1) % 4; //set to initial position ('topRight') or move to next position
        }

        switch (position) {
            case 0: classes[0] = 'bbTopLeft'; break;
            case 1: classes[0] = 'bbTopRight'; break;
            case 2: classes[0] = 'bbBottomLeft'; break;
            case 3: classes[0] = 'bbBottomRight'; break;
        }
        state.pos = position;
        setState();
    }

    function resize(size) {
        if (size === undefined || size === null) {
            size = (state && state.size == null) ? 0 : (state.size + 1) % 2;
        }

        classes[1] = (size === 0) ? 'bbSmall' : 'bbLarge'

        var span = document.getElementById(IDs.size);
        span.title = (size === 1) ? 'small' : 'large';
        span.className = span.title;

        state.size = size;
        setState();
        scrollToBottom();
    }

    function setState() {
        var props = [];
        for (entry in state) {
            var value = (state[entry] && state[entry].constructor === String) ? '"' + state[entry] + '"' : state[entry];
            props.push(entry + ':' + value);
        }
        props = props.join(',');

        var expiration = new Date();
        expiration.setDate(expiration.getDate() + 14);
        document.cookie = ['blackbird={', props, '}; expires=', expiration.toUTCString(), ';'].join('');

        var newClass = [];
        for (word in classes) {
            newClass.push(classes[word]);
        }
        bbird.className = newClass.join(' ');
    }

    function getState() {
        var re = new RegExp(/blackbird=({[^;]+})(;|\b|$)/);
        var match = re.exec(document.cookie);
        return (match && match[1]) ? eval('(' + match[1] + ')') : { pos: null, size: null, load: null };
    }

    //event handler for 'keyup' event for window
    function readKey(evt) {
        if (!evt) evt = window.event;
        var code = 113; //F2 key

        if (evt && evt.keyCode == code) {

            var visible = isVisible();

            if (visible && evt.shiftKey && evt.altKey) clear();
            else if (visible && evt.shiftKey) reposition();
            else if (!evt.shiftKey && !evt.altKey) {
                (visible) ? hide() : show();
            }
        }
    }

    //event management ( thanks John Resig )
    function addEvent(obj, type, fn) {
        var obj = (obj.constructor === String) ? document.getElementById(obj) : obj;
        if (obj.attachEvent) {
            obj['e' + type + fn] = fn;
            obj[type + fn] = function () { obj['e' + type + fn](window.event) };
            obj.attachEvent('on' + type, obj[type + fn]);
        } else obj.addEventListener(type, fn, false);
    }

    function removeEvent(obj, type, fn) {
        var obj = (obj.constructor === String) ? document.getElementById(obj) : obj;
        if (obj.detachEvent) {
            obj.detachEvent('on' + type, obj[type + fn]);
            obj[type + fn] = null;
        } else obj.removeEventListener(type, fn, false);
    }

    blackbird = {
        toggle:
			function () { (isVisible()) ? hide() : show(); },
        isVisible:
            function () { return !isHidden; },
        show:
			function () { show(); },
        hide:
			function () { hide(); },
        resize:
			function () { resize(); },
        clear:
			function () { clear(); },
        move:
			function () { reposition(); },
        debug:
			function (msg) { addMessage('debug', msg); },
        warn:
			function (msg) { addMessage('warn', msg); },
        info:
			function (msg) { addMessage('info', msg); },
        error:
			function (msg) { addMessage('error', msg); },
        profile:
			function (label) {
			    var currentTime = new Date(); //record the current time when profile() is executed

			    if (label == undefined || label == '') {
			        addMessage('error', '<b>ERROR:</b> Please specify a label for your profile statement');
			    }
			    else if (profiler[label]) {
			        addMessage('profile', [label, ': ', currentTime - profiler[label], 'ms'].join(''));
			        delete profiler[label];
			    }
			    else {
			        profiler[label] = currentTime;
			        addMessage('profile', label);
			    }
			    return currentTime;
			}
    }

    /* initialize Blackbird when the page loads */
	function init () {
        if (initialized) return;

		var body = document.getElementsByTagName('BODY')[0];
		bbird = body.appendChild(generateMarkup());
		outputList = bbird.getElementsByTagName('OL')[0];

		backgroundImage();

		//add events
		addEvent(IDs.checkbox, 'click', clickVis);
		addEvent(IDs.filters, 'click', clickFilter);
		addEvent(IDs.controls, 'click', clickControl);
		addEvent(document, 'keyup', readKey);

		resize(state.size);
		reposition(state.pos);
		if (state.load) {
		    show();
		    document.getElementById(IDs.checkbox).checked = true;
		}

		scrollToBottom();

        initialized = true;

		addEvent(window, 'unload', function () {
		    removeEvent(IDs.checkbox, 'click', clickVis);
		    removeEvent(IDs.filters, 'click', clickFilter);
		    removeEvent(IDs.controls, 'click', clickControl);
		    removeEvent(document, 'keyup', readKey);
		});
	};

    function isTouchDevice(){
	    /* Added Android 3.0 honeycomb detection because touchscroll.js breaks
		    the built in div scrolling of android 3.0 mobile safari browser */
	    if((navigator.userAgent.match(/android 3/i)) ||
		    (navigator.userAgent.match(/honeycomb/i)))
		    return false;
	    try{
		    document.createEvent("TouchEvent");
		    return true;
	    }catch(e){
		    return true;
	    }
    }

    function touchScroll(id){
	    if(isTouchDevice()){ //if touch events exist...
		    var el=document.getElementById(id);
		    var scrollStartPosY=0;
		    var scrollStartPosX=0;

		    document.getElementById(id).addEventListener("touchstart", function(event) {
			    scrollStartPosY=this.scrollTop+event.touches[0].pageY;
			    scrollStartPosX=this.scrollLeft+event.touches[0].pageX;
			    event.preventDefault(); // Keep this remarked so you can click on buttons and links in the div
		    },false);

		    document.getElementById(id).addEventListener("touchmove", function(event) {
			    // These if statements allow the full page to scroll (not just the div) if they are
			    // at the top of the div scroll or the bottom of the div scroll
			    // The -5 and +5 below are in case they are trying to scroll the page sideways
			    // but their finger moves a few pixels down or up.  The event.preventDefault() function
			    // will not be called in that case so that the whole page can scroll.
			    if ((this.scrollTop < this.scrollHeight-this.offsetHeight &&
				    this.scrollTop+event.touches[0].pageY < scrollStartPosY-5) ||
				    (this.scrollTop != 0 && this.scrollTop+event.touches[0].pageY > scrollStartPosY+5))
					    event.preventDefault();	
			    if ((this.scrollLeft < this.scrollWidth-this.offsetWidth &&
				    this.scrollLeft+event.touches[0].pageX < scrollStartPosX-5) ||
				    (this.scrollLeft != 0 && this.scrollLeft+event.touches[0].pageX > scrollStartPosX+5))
					    event.preventDefault();	
			    this.scrollTop=scrollStartPosY-event.touches[0].pageY;
			    this.scrollLeft=scrollStartPosX-event.touches[0].pageX;
		    },false);
	    }
    }

    init();
    touchScroll('scrollMe');

    return blackbird;
});