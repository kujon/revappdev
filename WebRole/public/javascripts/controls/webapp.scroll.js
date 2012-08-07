// ------------------------------------------
// ISCROLL
// ------------------------------------------

WebAppLoader.addModule({ name: 'scroll', plugins: ['helper'], hasEvents: true }, function () {
    var scroll              = {},
        eventManager        = this.getEventManager(),
        helper              = this.getPlugin('helper'),
        lastXPosition       = 0,
        lastYPosition       = 0,
        isRebuilding        = false,
        myScroll;           // Please don't initialize myScroll.

    /* Use this for high compatibility (iDevice + Android)*/
    document.addEventListener('touchmove', function (e) { e.preventDefault(); }, false);

    // Public
    function saveScrollPosition() {
        // TODO: Store positions and return an id to use with restoreScrollPosition.
        if (myScroll) {
            lastXPosition = myScroll.x;
            lastYPosition = myScroll.y;
        }
    }

    // Public
    function restoreScrollPosition(offsetX, offsetY/* TODO: id*/) {
        offsetX = offsetX || 0;
        offsetY = offsetY || 0;
        // If restoreScrollPosition has been called immediately after the rebuildScroll
        // method, we need deferring execution of the code to ensure that the myScroll object
        // exists.
        setTimeout(function () {
            try {
                myScroll.scrollTo(lastXPosition, lastYPosition);
            } catch (e) {

            }
        }, 100);
    }
    
    // Public
    function scrollToElement(element, offset, time) {
        var top           = 0,
            el            = null,
            animationTime = helper.getValueAs(time, 'number');
        
        try { el = $(element); } catch (e) {}
                
        if (!el) return;

        setTimeout(function () {
            try {
                top = (el.offset().top * -1) + offset || 0;
                top += myScroll.wrapperOffsetTop;
                myScroll.scrollTo(0, top, animationTime + 100);
            } catch (e) {

            }
        }, 100);
    }

    // Public
    function scrollTo(x, y, time) {
        var animationTime = helper.getValueAs(time, 'number');

        setTimeout(function () {
            try {
                if ((x == myScroll.x) && (y == myScroll.y)) { return; }
                myScroll.scrollTo(x, y  - myScroll.wrapperOffsetTop, animationTime, true);
            } catch (e) {

            }
        }, 100);
    }
    
    // Public
    function scrollToPage(pageX, pageY, time) {
        var animationTime = helper.getValueAs(time, 'number');

        setTimeout(function () {
            try {
                myScroll.scrollToPage(pageX || 0, pageY || 0, animationTime, true);
            } catch (e) {

            }
        }, 100);
    }

    // Public
    function goUp() {
        try {
            myScroll.scrollTo(0, 0, 200);
        } catch (e) {

        }
    }

    // Private
    function removeUnusedScroll($scroller) {
        function removeNext($next) {
            if ($next.length > 0) {
                $next.remove();
                if ($scroller.next().length > 0) {
                    removeUnusedScroll($scroller.next());
                }
            }
        }
                
        removeNext($scroller.next());
    }

    // Public
    function rebuildScroll(id, config) {
        var wrapper         = 'div#' + id + ' #wrapper',
            config          = config || {},
            clickSafeMode   = helper.getValueAs(config.clickSafeMode, 'boolean'),
            forceRebuilding = helper.getValueAs(config.forceRebuilding, 'boolean'),
            restorePosition = helper.getValueAs(config.restorePosition, 'boolean'),         
            options         = helper.getValueAs(config.iScrollOptions, 'object');

        if (isRebuilding && !forceRebuilding) {
            return;
        } else {
            isRebuilding = true;
        }

        options.useTransform = (options.useTransform)
            ? options.useTransform
            : false;

        options.bounce = (options.bounce)
            ? options.bounce
            : false;

        // Overriden events.
        options.onBeforeScrollStart = function (e) {
            var target = e.target;
            while (target.nodeType != 1) target = target.parentNode;

            if (clickSafeMode && target.tagName != 'SELECT' && target.tagName != 'INPUT' && target.tagName != 'TEXTAREA') {
                e.preventDefault();
            }
        };

        options.onScrollEnd = function() {
            var page = 0;
            
            try {
                page = Math.round(Math.abs(this.x / this.wrapperW)); // Page calculated correctly.
            } catch (e) {
                // Sometime currPageX returns a wrong value when it tries to get the last page. 
                page = this.currPageX;
            }
            eventManager.raiseEvent('onScrolledToPage', page);
        };

        // Try to restore any previous position if requested.
        if (restorePosition) {
            options.x = lastXPosition;
            options.y = lastYPosition;
        }

        // Remove comments from these options if you want to override defaults.
        // options.snap = 'hr';
        // options.momentum = true;
        // options.zoom = true;
        // options.snap = true;
        // options.momentum = false;
        // options.hScrollbar = false;
        // options.vScrollbar = false;
        // options.hScroll = false;
        // options.vScroll = true;

        if (myScroll) {
            myScroll.destroy();
            myScroll = null;

            removeUnusedScroll($(wrapper).find('#scroller', '#horizontal_scroller'));
        }

        if ($(wrapper).get(0)) {
            setTimeout(function () {
                myScroll = new iScroll($(wrapper).get(0), options);
                isRebuilding = false;
            }, 25); // Usually timers should be set to a minimum of 25 milliseconds to work properly.
        }
    }

    scroll.rebuild = rebuildScroll; // Alias
    scroll.goUp = goUp;
    scroll.saveScrollPosition = saveScrollPosition;
    scroll.restoreScrollPosition = restoreScrollPosition;
    scroll.scrollToElement = scrollToElement;
    scroll.scrollTo = scrollTo;
    scroll.scrollToPage = scrollToPage;

    return scroll;
});