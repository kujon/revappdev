// ------------------------------------------
// HELPER
// ------------------------------------------

// Configuration
WebAppLoader.addModule({
    name: 'helper',
    isPlugin: true
}, 

// Constructor
function () {
    var helper = {};

    // ------------------------------------------
    // STRING FUNCTIONS
    // ------------------------------------------

    function capitaliseFirstLetter(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    function startsWith(str, prefix) {
        return str.indexOf(prefix) === 0;
    }

    function endsWith(str, suffix) {
        return str.match(suffix + "$") == suffix;
    }

    function format () {
      var s = arguments[0];
      
      for (var i = 0; i < arguments.length - 1; i++) {       
        var reg = new RegExp("\\{" + i + "\\}", "gm");             
        s = s.replace(reg, arguments[i + 1]);
      }

      return s;
    }

    function StringBuilder()
    {
	    var strings = [];

	    this.append = function ()
	    {
            var string = format.apply(null, arguments);

		    string = verify(string);
		    if (string.length > 0) strings[strings.length] = string;
	    };

        // Alias.
        this.add = this.append;

	    this.appendLine = function (string)
	    {
		    var string = verify(string);
		    if (this.isEmpty())
		    {
			    if (string.length > 0) strings[strings.length] = string;
			    else return;
		    }
		    else strings[strings.length] = string.length > 0 ? "\r\n" + string : "\r\n";
	    };

	    this.clear = function () { strings = []; };

	    this.isEmpty = function () { return strings.length == 0; };

	    this.toString = function () { return strings.join(""); };

	    var verify = function (string)
	    {
		    if (!defined(string)) return "";
		    if (getType(string) != getType(new String())) return String(string);
		    return string;
	    };

	    var defined = function (el)
	    {
		    // Changed per Ryan O'Hara's comment:
		    return el != null && typeof(el) != "undefined";
	    };

	    var getType = function (instance)
	    {
		    if (!defined(instance.constructor)) throw Error("Unexpected object type");
		    var type = String(instance.constructor).match(/function\s+(\w+)/);

		    return defined(type) ? type[1] : "undefined";
	    };
    };

    // ------------------------------------------
    // DATA TYPE FUNCTIONS
    // ------------------------------------------

    function getValueAs(value, type) {
        function getValue(exp, type, defaultValue) {
            return (typeof exp === type) ? exp : defaultValue;
        }

        function getValueAsArray(exp, defaultValue) {
            return (Array.isArray(exp)) ? exp : defaultValue;
        }

        switch (type) {
            case 'boolean':
                return getValue(value, 'boolean', false);
            case 'b':
                return getValue(value, 'boolean', false);
            case 'string':
                return getValue(value, 'string', '');
            case 's':
                return getValue(value, 'string', '');
            case 'number':
                return getValue(value, 'number', 0);
            case 'n':
                return getValue(value, 'number', 0);
            case 'object':
                return getValue(value, 'object', {});
            case 'o':
                return getValue(value, 'object', {});
            case 'array':
                return getValueAsArray(value, []);
            case 'a':
                return getValueAsArray(value, []);
            default:
                return value;
        }
    }

    // Public
    function getType(value) {
        var TYPES = {
            'undefined'        : 'undefined',
            'number'           : 'number',
            'boolean'          : 'boolean',
            'string'           : 'string',
            '[object Function]': 'function',
            '[object RegExp]'  : 'regexp',
            '[object Array]'   : 'array',
            '[object Date]'    : 'date',
            '[object Error]'   : 'error'
        },
        TOSTRING = Object.prototype.toString;

        function type(o) {
            return TYPES[typeof o] || TYPES[TOSTRING.call(o)] || (o ? 'object' : 'null');
        } 
        
        return type(value);      
    }

    // Public
    function hasValue(value) {
        return (value != undefined && value != null);
    }

    // ------------------------------------------
    // GENERIC FUNCTIONS
    // ------------------------------------------

    function createUUID() {
        return 'xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
            var r = Math.random()*16|0, v = c == 'x' ? r : (r&0x3|0x8);
            return v.toString(16);
        });
    }


    function removeObjectFromArray(arrayItems, propertyToCheck, value) {
        var removedObject = null;

         for(var i = arrayItems.length-1; i >= 0; i--){  
            if(arrayItems[i] && arrayItems[i][propertyToCheck] === value){                     
                removedObject = arrayItems.splice(i,1);
                break;
            }
        }
       
        return removedObject;
    }

    function getObjectFromArray(arrayItems, propertyToCheck, value) {
        var object = null;

         for(var i = arrayItems.length-1; i >= 0; i--){  
            if(arrayItems[i] && arrayItems[i][propertyToCheck] === value){                     
                object = arrayItems[i];
                break;
            }
        }
       
        return object;
    }

    function getURLParameter(name) {
        var param = decodeURIComponent(
            (location.search.match(RegExp("[?|&]"+name+'=(.+?)(&|$)'))||[,null])[1]
        );  
        return (param === 'null')
            ? null
            : param;
    }

    function htmlDecode(input){
        var e = document.createElement('div'),
            i, html = '';

        e.innerHTML = input;

        // Concatenate the child nodes together, since we might have a
        // problem with cut-off first child content if the node content 
        // is too large (greater than ~40000 characters).
        for (i = 0; i < e.childNodes.length; i++) {
            html += e.childNodes[i].nodeValue;
        }

        return html;
    }

    function sortObject(o) {
        var sorted = {},
        key, a = [];

        for (key in o) {
            if (o.hasOwnProperty(key)) {
                    a.push(key);
            }
        }

        a.sort();

        for (key = 0; key < a.length; key++) {
            sorted[a[key]] = o[a[key]];
        }
        return sorted;
    }

    function touchScroll(id){
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

    helper.capitaliseFirstLetter = capitaliseFirstLetter;
    helper.getValueAs = getValueAs;
    helper.startsWith = startsWith;
    helper.endsWith = endsWith;
    helper.format = format;
    helper.StringBuilder = StringBuilder;
    helper.getType = getType;
    helper.hasValue = hasValue;
    helper.createUUID = createUUID;
    helper.removeObjectFromArray = removeObjectFromArray;
    helper.getURLParameter = getURLParameter;
    helper.getObjectFromArray = getObjectFromArray;
    helper.htmlDecode = htmlDecode;
    helper.sortObject = sortObject;
    helper.touchScroll = touchScroll;

    return helper;
});