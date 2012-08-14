// ------------------------------------------
// LOCALIZATION MANAGER
// ------------------------------------------

// Configuration
WebAppLoader.addModule({
    name: 'localizationManager',
    isShared: true
}, 

// Constructor
function (config) {
    var manager     = {},
        output      = this.getConsole(),
        language    = require('express.language');

    manager.sayHello = function () {
        output.log(language.hello);
    };

    // Public
    function get(text) {
        var localizedString = language[text] || '';

        return localizedString;
    }

    // Public
    function getLanguage() {
        return language;
    }

    manager.get = get;
    manager.getLanguage = getLanguage;

    return manager;
});