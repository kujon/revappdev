// ------------------------------------------
// LOADING MASK MANAGER
// ------------------------------------------

WebAppLoader.addModule({ name: 'loadingMaskManager', sharedModules: ['pageElements'], hasEvents: true, isShared: true }, function () {
    var loadingMaskManager  = {},
        output              = this.getConsole(),
        eventManager        = this.getEventManager(),
        el                  = this.getSharedModule('pageElements'),
        loadingText         = null,
        masks               = {};

    // Define the loading mask text.
    loadingText = $(el.loadingText);

    // Define all the available masks.
    masks.ajax = {
        name        : 'ajax',
        enabled     : true,
        el          : el.ajaxLoadingMask
    };

    masks.analysis = {
        name        : 'analysis',
        enabled     : true,
        el          : el.chartLoadingMask
    };

    masks.preventTap = {
        name        : 'preventTap',
        enabled     : true,
        el          : el.preventTapMask
    };
    
    masks['default'] = masks.ajax;
    
    function hide(type /* TODO: fade */) {
        var mask = masks[type || 'default'] || null;

        if (mask) {
            $(mask.el).css("display", "none");
        }
    }

    function show(type /* TODO: fade */) {
        var mask = masks[type || 'default'] || null;

        if (mask && mask.enabled) {
            $(mask.el).hide();
            $(mask.el).show();
        }
    }

    function updateAnalysisText(text) {
        loadingText.html(text);
    }

    $(el.ajaxLoadingMask).click(function(){
        hide('ajax');
    });

    $(el.chartLoadingMask).click(function(){
        hide('analysis');
    });
    
    // TODO: Add code to prevent showing of any masks and or to enable/disable them.
    loadingMaskManager.show = show;
    loadingMaskManager.hide = hide;
    loadingMaskManager.updateAnalysisText = updateAnalysisText;

    return loadingMaskManager;
});