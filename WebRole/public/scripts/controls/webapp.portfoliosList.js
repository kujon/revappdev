﻿// ------------------------------------------
// PORTFOLIOS LIST
// ------------------------------------------

// Configuration
WebAppLoader.addModule({
    name: 'portfoliosList', 
    plugins: [],
    sharedModules: ['settings', 'pageElements', 'ajaxManager'],
    hasEvents: true
}, 

// Constructor
function () {
    var portfoliosList  = {},
        output          = this.getConsole(),
        eventManager    = this.getEventManager(),
        settings        = this.getSharedModule('settings'),
        el              = this.getSharedModule('pageElements'),
        ajaxManager     = this.getSharedModule('ajaxManager');
    
    function onPortfolioAnalysisClick(e) {
        var uri = $(this).attr("data-link");

        ajaxManager.post(settings.siteUrls.analysis, { uri: uri }, function (data) {
            eventManager.raiseEvent('onDataReceived', data);
        });
        
        return false;
    }

    $(document).on('click', el.portfolioAnalysisLink, onPortfolioAnalysisClick);
    
    return portfoliosList;
});