// ------------------------------------------
// LANGUAGE SETTINGS PAGE
// ------------------------------------------

// Configuration
WebAppLoader.addModule({
    name: 'languageSettingsPage',
    sharedModules: ['settings', 'pageElements'],
    hasEvents: true
}, 

// Constructor
function () {
    var languageSettingsPage    = {},
        output                  = this.getConsole(),
        eventManager            = this.getEventManager(),
        languages               = this.getSharedModule('settings').languages,
        el                      = this.getSharedModule('pageElements');

    function onLanguageClick() {
        var language = JSON.parse($(this).data("link"));

        if (language) {
            eventManager.raiseEvent('onLanguageSelected', language);
        }

        return false;
    }

    function create() {
        for (var i = 0; i < languages.length; i++) {
            $(el.listLanguagesPages).append(
                $('<li>').append(
                    $('<a>').attr({ 'href': '#', 'data-link': JSON.stringify(languages[i]) })
                    .html(languages[i].name)
                    .on('click', onLanguageClick)
                )
            );
        }
    }

    languageSettingsPage.create = create;

    return languageSettingsPage;
});