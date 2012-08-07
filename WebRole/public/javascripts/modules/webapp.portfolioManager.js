// ------------------------------------------
// PORTFOLIO MANAGER
// ------------------------------------------

WebAppLoader.addModule({ name: 'portfolioManager', plugins: [], sharedModules: ['settings', 'ajaxManager', 'localizationManager'],
    dataObjects: ['portfolio'], hasEvents: true
}, function () {
    var portfolioManager    = {},
        output              = this.getConsole(),
        eventManager        = this.getEventManager(),
        settings            = this.getSharedModule('settings'),
        portfolioDataObj    = this.getDataObject('portfolio'),
        lang                = this.getSharedModule('localizationManager').getLanguage() || {},
        ajaxManager         = this.getSharedModule('ajaxManager'),
        lastPortfolioIdUsed = '',
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

    // Public
    function getAnalysis(uri, callback) {
        ajaxManager.post(settings.siteUrls.analysis, { uri: uri, datatype: 'json' }, function (response) {

            // If no analysis HTML template data was returned for 
            // the given portfolio, or an error was raised...
            if (!response || !response.data || response.error) {
                // ...raise a failure event and return.
                eventManager.raiseEvent('onFailed', lang.errors.analysisFailedText, lang.errors.analysisFailedReasonText);
                return;
            }

            // Raise notification events.
            eventManager.raiseEvent('onAnalysisLoaded', response.data);

            // Call the callback.
            callback();
        }, 'json');
    }

    function loadPortfolio(portfolioCode, callback) {
        var defaultPortfolioCode,
            portfolio = {                
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

        lastPortfolioIdUsed = portfolio.code = getPortfolioCode();
        loadPortfolioData(onLoadPortfolioDataCompleted);

        function loadPortfolioData(callback) {
            var oData = {},
                defaultAnalysisLink = null;

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
                    defaultAnalysisLink = null;

                    // ...and raise a failure event and return.
                    eventManager.raiseEvent('onFailed', lang.errors.portfolioNotFoundText, lang.errors.portfolioNotFoundReasonText);
                    return;
                }

                // Persist the portfolio code and the link to its default analysis.
                portfolio.code = response.data.items[0].code;
                defaultAnalysisLink = response.data.items[0].links.defaultAnalysis.href;

                // Call the callback.
                callback({ defaultAnalysisLink: defaultAnalysisLink });

            }, 'json');
        }

        function onLoadPortfolioDataCompleted(data) {
            if (data.defaultAnalysisLink) {
                portfolio.analysisLink = data.defaultAnalysisLink;
                loadPortfolioAnalysis(data.defaultAnalysisLink, onLoadPortfolioAnalysisCompleted);
            }
        }

        function loadPortfolioAnalysis(defaultAnalysisLink, callback) {
            ajaxManager.post(settings.siteUrls.portfolioAnalysis, { uri: defaultAnalysisLink, datatype: 'json' }, function (response) {

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

                // If we have results, persist their basic details also.
                if (response.data.analysis.results) {
                    portfolio.timeStamp = response.data.analysis.results.timeStamp || '';
                    portfolio.timePeriods = response.data.analysis.results.timePeriods || [];
                }

                // Call the callback.
                callback();

            }, 'json');
        }

        function onLoadPortfolioAnalysisCompleted() {

            // Persist the currently selected portfolio.
            portfolioDataObj.setData(portfolio);
            lastPortfolioUsed = portfolio;

            // Raise notification events.
            eventManager.raiseEvent('onPortfolioLoaded', portfolio);
            eventManager.raiseEvent('onTimePeriodsLoaded', portfolio.timePeriods);

            // Call the callback, passing the analysis link.
            callback(portfolio.analysisLink);
        }
    }

    function loadPortfolioAnalysis(portfolioCode, callback) {

        function onGetAnalysisCompleted() {
            callback(lastPortfolioUsed);
        }

        function onLoadPortfolioCompleted(defaultAnalysisLink) {
            getAnalysis(defaultAnalysisLink, onGetAnalysisCompleted);
        }

        loadPortfolio(portfolioCode, onLoadPortfolioCompleted);
    }

    portfolioManager.loadPortfolio = loadPortfolio;
    portfolioManager.getAnalysis = getAnalysis;
    portfolioManager.loadPortfolioAnalysis = loadPortfolioAnalysis;

    return portfolioManager;
});