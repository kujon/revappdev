// ------------------------------------------
// PORTFOLIO MANAGER
// ------------------------------------------

// Configuration
WebAppLoader.addModule({
    name: 'portfolioManager',
    plugins: [], 
    sharedModules: ['settings', 'ajaxManager', 'localizationManager'],
    dataObjects: ['portfolio'], 
    hasEvents: true
}, 

// Constructor
function () {
    var portfolioManager    = {},
        output              = this.getConsole(),
        eventManager        = this.getEventManager(),
        settings            = this.getSharedModule('settings'),
        portfolioDataObj    = this.getDataObject('portfolio'),
        lang                = this.getSharedModule('localizationManager').getLanguage() || {},
        ajaxManager         = this.getSharedModule('ajaxManager'),
        lastPortfolioUsed   = {};

    portfolioDataObj.define({
        code: '',
        name: '',
        type: '',
        analysisLink: '',
        currency: '',
        version: '',
        timeStamp: '',
        timePeriods: []
    });

    // Private
    function loadPortfolio(portfolioCode, callback) {
        var portfolio = {                
                code: '',
                name: '',
                type: '',
                analysisLink: '',
                currency: '',
                version: '',
                timeStamp: '',
                timePeriods: []
            };

        // Load default portfolio.
        function getPortfolioCode() {
            // TODO: Add code here to select the right portfolio code from:
            // - First portfolio
            // - Default portfolio
            // - Last saved portfolio
            // - Etc. etc.
            if (portfolioCode) {
                return portfolioCode;
            } else {
                // Return the first available portfolio.
                return '';
            }
        }

        // Define our portfolio code.
        portfolio.code = getPortfolioCode();

        // Load the portfolio data, passing the callback 
        // to load the portfolio's analysis when done.
        loadPortfolioData(loadPortfolioAnalysis);

        function loadPortfolioData(callback) {
            var oData = {};

            // Filter on the portfolio code if provided, otherwise just
            // retrieve the first portfolio in the default list.
            if (portfolio.code) {
                oData.filter = "Code eq '" + portfolio.code + "'";
            } else {
                oData.start = 0;
                oData.top = 1;
            }

            ajaxManager.post(settings.siteUrls.portfolios, { oData: oData, datatype: 'json' }, function (response) {

                // If no portfolio data was returned for our query...
                if (!response || !response.data || !response.data.items || response.data.items.length < 1) {

                    // ...clear out the portfolio and links...
                    portfolio.code = '';

                    // ...and raise a failure event and return.
                    eventManager.raiseEvent('onFailed', lang.errors.portfolioNotFoundText, lang.errors.portfolioNotFoundReasonText);
                    return;
                }

                // Call the callback with a link to the default analysis.
                callback(response.data.items[0].links.defaultAnalysis.href);

            }, 'json');
        }

        function loadPortfolioAnalysis(defaultAnalysisLink) {
            
            if (!defaultAnalysisLink) {
                return;
            }
            
            ajaxManager.post(settings.siteUrls.analysis, { uri: defaultAnalysisLink, datatype: 'json' }, function (response) {

                // If no analysis data was returned for the given 
                // portfolio, or an explicit error was raised...
                if (!response || !response.data || !response.data.analysis || response.error) {
                    // ...raise a failure event and return.
                    eventManager.raiseEvent('onFailed', lang.errors.analysisFailedText, lang.errors.analysisFailedReasonText);
                    return;
                }

                // Persist the basic portfolio information.
                portfolio.name = response.data.name || '';
                portfolio.type = response.data.type || '';
                portfolio.currency = response.data.analysis.currency || '';
                portfolio.version = response.data.analysis.version || '';
                portfolio.analysisLink = defaultAnalysisLink;

                // If we have results, persist their basic details also.
                if (response.data.analysis.results) {
                    portfolio.timeStamp = response.data.analysis.results.timeStamp || '';
                    portfolio.timePeriods = response.data.analysis.results.timePeriods || [];
                }

                // Persist the currently selected portfolio.
                portfolioDataObj.setData(portfolio);
                lastPortfolioUsed = portfolio;

                // Raise notification events.
                eventManager.raiseEvent('onPortfolioLoaded', portfolio);
                eventManager.raiseEvent('onTimePeriodsLoaded', portfolio.timePeriods);
                eventManager.raiseEvent('onAnalysisLoaded', response.data);

                // Call the callback, passing the analysis link.
                callback(defaultAnalysisLink);

            }, 'json');
        }
    }

    function loadPortfolioAnalysis(portfolioCode, callback) {

        function onLoadPortfolioCompleted() {
            callback(lastPortfolioUsed);
        }

        loadPortfolio(portfolioCode, onLoadPortfolioCompleted);
    }

    portfolioManager.loadPortfolioAnalysis = loadPortfolioAnalysis;

    return portfolioManager;
});