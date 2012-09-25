// ------------------------------------------
// SETTINGS
// ------------------------------------------

// Configuration
WebAppLoader.addModule({
    name: 'settings',
    dataObjects: ['appSettings', 'userSettings'],
    isShared: true
}, 

// Constructor
function () {
    var settings            = {},
        appSettings         = {},
        siteUrls            = {},
        languages           = [],
        output              = this.getConsole(),
        userSettingsDataObj = this.getDataObject('userSettings'),
        appSettingsDataObj  = this.getDataObject('appSettings');

    userSettingsDataObj.define({
        automaticLogin      : true,
        username            : '',
        password            : '',
        language            : 'en-US',
        lastUsedLanguage    : 'none'
    });

    appSettingsDataObj.define({
        lastLoggedOnUser    : ''
    });
    
    // APP SETTINGS.
    appSettings = {
        loadPortfoliosSlotDataOnce: true,
        automaticLanguageDetection: true,
        animatedChartResizing: true,
        automaticChartRepositioning: false
    };

    // URLs.
    siteUrls = {
        portfolios          : '/portfolios',
        authenticate        : '/authenticate',
        index               : '/index',
        portfolioAnalysis   : '/portfolioAnalysis',
        analysis            : '/analysis',
        segmentsTreeNode    : '/segmentsTreeNode',
        timeSeries          : '/timeSeries',
        eula                : '/eula'
    };

    // LANGUAGES
    languages = [{
        id      : 'en-US',
        value   : 'en-US',
        name    : 'English'
    }, {
        id      : 'de-DE',
        value   : 'de-DE',
        name    : 'Deutsch'
    }, { 
        id      : 'es-ES',
        value   : 'es-ES',
        name    : 'Español'
    }, {
        id      : 'it-IT',
        value   : 'it-IT',
        name    : 'Italiano'
    }, {
        id      : 'ja-JP',
        value   : 'ja-JP',
        name    : '日本語'
    }, {
        id      : 'ko-KR',
        value   : 'ko-KR',
        name    : '한국어'
    }, { 
        id      : 'pl-PL',
        value   : 'pl-PL',
        name    : 'Polski'
    }, { 
        id      : 'zh-CHS',
        value   : 'zh-CHS',
        name    : '中文(简体)'
    }, { 
        id      : 'zh-CHT',
        value   : 'zh-CHT',
        name    : '中文(繁體)'
    }];

    function changeSetting(key, value) {
        appSettings[key] = value;
        output.log('change setting');
    }

    function get(key) {
        return appSettings[key];
    }

    function getVersion() {
        return '1.0';
    }

    settings.changeSetting = changeSetting;
    settings.set = changeSetting; // Alias
    settings.get = get;
    settings.getVersion = getVersion;
    settings.appSettings = appSettings;
    settings.siteUrls = siteUrls;
    settings.languages = languages;

    return settings;
});