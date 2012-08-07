// ------------------------------------------
// THEMES MANAGER
// ------------------------------------------

WebAppLoader.addModule({ name: 'themesManager', sharedModules: ['pageElements'], 
    dataObjects: ['theme'], hasEvents: true }, function () {
    var themesManager   = {},
        eventManager    = this.getEventManager(),
        output          = this.getConsole(),
        el              = this.getSharedModule('pageElements'),
        themeDataObj    = this.getDataObject('theme'),
        defaultStyle    = 'Revolution';

    themeDataObj.define({
        name: defaultStyle
    });

    // Private
    function onThemeChange(event) {
        var theme = $(this).attr("data-title") || null;
        eventManager.raiseEvent('onThemeChanged', theme);
    }

    // Public
    function switchStyle(theme) {
        var style = null;
        if (typeof theme === 'object' && theme.name) {
            style = theme.name;
        } else {
            style = theme;
        }
        jQT.switchStyle(style || defaultStyle);
    }
    
    $(el.themesPage + ' ul li a').on('click', onThemeChange);

    themesManager.switchStyle = switchStyle;

    return themesManager;
});