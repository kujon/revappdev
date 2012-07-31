﻿// ------------------------------------------
// ISCROLL
// ------------------------------------------

WebAppLoader.addModule({ name: 'scroll', hasEvents: true }, function () {
    var scroll              = {},
        eventManager        = this.getEventManager(),
        myScroll, // Please don't initialize myScroll.
        savedScrollPosition = [],
        lastXPosition       = 0,
        lastYPosition       = 0,
        isRebuilding        = false; 

    /* Use this for high compatibility (iDevice + Android)*/
    document.addEventListener('touchmove', function (e) { e.preventDefault(); }, false);

    function saveScrollPosition() {
        // TODO: Store positions and return an id to use with restoreScrollPosition.
        // savedScrollPosition[0] = {x: myScroll.x, y: myScroll.y};
        if (myScroll) {
            lastXPosition = myScroll.x;
            lastYPosition = myScroll.y;
        }
    }

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
    
    function scrollToElement(element, offset, time) {
        var top = 0,
            el  = null;
        
        try { el = $(element); } catch (e) {}
                
        if (!el) return;

        setTimeout(function () {
            try {
                top = (el.offset().top * -1) + offset || 0;
                top += myScroll.wrapperOffsetTop;
                myScroll.scrollTo(0, top, time + 100);
            } catch (e) {

            }
        }, 100);
    }

    function scrollTo(x, y, time) {
        setTimeout(function () {
            try {
                myScroll.scrollTo(x, y  - myScroll.wrapperOffsetTop, time || 1000, true);
            } catch (e) {

            }
        }, 100);
    }
    
    function scrollToPage(pageX, pageY, time) {
        setTimeout(function () {
            try {
                myScroll.scrollToPage(pageX || 0, pageY || 0, time || 1000, true);
            } catch (e) {

            }
        }, 100);
    }

    function rebuildScroll(id, clickSafeMode, optionConfig, forceRebuilding) {
        if (isRebuilding && !forceRebuilding) {
            return;
        } else {
            isRebuilding = true;
        }

        var wrapper = 'div#' + id + ' #wrapper',
            options = optionConfig || {}; // { hScrollbar: false, vScrollbar: true }

        options.useTransform = (optionConfig && optionConfig.useTransform)
            ? optionConfig.useTransform
            : false;

        options.onBeforeScrollStart = function (e) {
            var target = e.target;
            while (target.nodeType != 1) target = target.parentNode;

            if (clickSafeMode && target.tagName != 'SELECT' && target.tagName != 'INPUT' && target.tagName != 'TEXTAREA') {
                e.preventDefault();
            }
        };

        // Remove comments from these options if you want to activate the snap.
        // options.snap = 'hr';
        // options.momentum = true;
        // options.zoom = true;
        // options.snap = true;
        // options.momentum = false;
        // options.hScrollbar = false;
        // options.vScrollbar = false;

        // options.hScroll = false;
        // options.vScroll = true;
        
//        options.onScrollMove = function() {
//            //alert('onScrollMove');
//        };
//        
//        options.onScrollEnd = function() {
//            var page = 0;
//            
//            try {
//                page = Math.round(Math.abs(this.x / this.wrapperW)); // Page calculated correctly.
//                // console.log(this.x / this.wrapperW);
//            } catch (e) {
//                // Sometime currPageX returns a wrong value when it tries to get the last page. 
//                page = this.currPageX;
//            }
//            // console.log('onScrolledToPage: ' + page);
//            eventManager.raiseEvent('onScrolledToPage', page);
//            // alert('onScrollEnd: ' + this.currPageX + ' vs ' + Math.round(Math.abs(this.x / this.wrapperW)));
//        };

        if (myScroll) {
            myScroll.destroy();
            myScroll = null;

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

            removeUnusedScroll($(wrapper).find('#scroller', '#horizontal_scroller'));
        }

        if ($(wrapper).get(0)) {
            setTimeout(function () {
                myScroll = new iScroll($(wrapper).get(0), options);
                isRebuilding = false;
            }, 25); // Usually timers should be set to a minimum of 25 milliseconds to work properly.
        }
    }

    function goUp() {
        try {
            myScroll.scrollTo(0, 0, 200);
        } catch (e) {

        }
    }

    scroll.rebuild = rebuildScroll;
    scroll.goUp = goUp;
    scroll.saveScrollPosition = saveScrollPosition;
    scroll.restoreScrollPosition = restoreScrollPosition;
    scroll.scrollToElement = scrollToElement;
    scroll.scrollTo = scrollTo;
    scroll.scrollToPage = scrollToPage;

    return scroll;
});