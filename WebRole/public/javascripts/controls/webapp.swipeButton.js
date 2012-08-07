// ------------------------------------------
// SWIPE BUTTON
// ------------------------------------------

WebAppLoader.addModule({ name: 'swipeButton', sharedModules: ['settings', 'pageElements', 'ajaxManager'], hasEvents: true }, function () {
    var swipeButton     = {},
        output          = this.getConsole(),
        eventManager    = this.getEventManager(),
        el              = this.getSharedModule('pageElements');
    
      function addTo(containerId, label, callback, autoRemove, buttonClass) {
        $(containerId + ' li').swipeDelete({
            btnLabel: label,
            btnClass: buttonClass,
            click: function(e){
                e.preventDefault();
                if (autoRemove) {
                    $(this).parents('li').remove();
                }
                output.log('swipe');
                callback($(this));
            }
        });
    }

    swipeButton.addTo = addTo;

    return swipeButton;
});