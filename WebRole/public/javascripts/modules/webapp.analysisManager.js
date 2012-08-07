// ------------------------------------------
// ANALYSIS MANAGER
// ------------------------------------------

WebAppLoader.addModule({ name: 'analysisManager', sharedModules: [], dataObjects: ['analysisPages'], hasEvents: true }, function () {

    var analysisManager         = {},
        output                  = this.getConsole(),
        eventManager            = this.getEventManager(),
        analysisPagesDataObj    = this.getDataObject('analysisPages'),
        analysisPages           = {};

    analysisPagesDataObj.define({
        items: [{
            name        : 'Performance',
            id          : 'performance',
            order       : 1,
            userDefined : false,
            charts      : [{
                    chartId : 'performance_grid',
                    order   : 1
                },{
                    chartId : 'performance_line',
                    order   : 2
                },{
                    chartId : 'performance_bubble',
                    order   : 3
                },{
                    chartId : 'performanceMaster_grid',
                    order   : 4
                },{
                    chartId: 'performance_bar',
                    order   : 5
                },{
                    chartId: 'performance_treemap',
                    order   : 6
                },{
                    chartId: 'performanceTopTen_grid',
                    order   : 7
                }] 
        },{
            name        : 'Risk',
            id          : 'risk',
            order       : 2,
            userDefined : false,
            charts      : [{
                    chartId : 'riskMaster_grid',
                    order   : 1
                },{
                    chartId: 'risk_treemap',
                    order   : 2
                },{
                    chartId: 'risk_bar',
                    order   : 3
                },{
                    chartId: 'risk_bubble',
                    order   : 4
                },{
                    chartId: 'risk_pie',
                    order   : 5
                },{
                    chartId: 'riskTopTen_grid',
                    order   : 6
                }]             
        },{
            name        : 'Asset Allocation',
            id          : 'assetAllocation',
            order       : 3,
            userDefined : false,
            charts      : [{
                    chartId : 'allocationMaster_grid',
                    order   : 1
                },{
                    chartId: 'allocation_pie',
                    order   : 2
                },{
                    chartId: 'allocation_bar',
                    order   : 3
                },{
                    chartId: 'allocationLongShort_grid',
                    order   : 4
                }]             
        },{
            name        : 'Contribution',
            id          : 'contribution',
            order       : 4,
            userDefined : false,
            charts      : [{
                    chartId : 'contributionMaster_grid',
                    order   : 1
                },{
                    chartId: 'contribution_pie',
                    order   : 2
                },{
                    chartId: 'contribution_column',
                    order   : 3
                },{
                    chartId: 'contribution_bar',
                    order   : 4
                },{
                    chartId: 'contributionTopTen_grid',
                    order   : 5
                }]            
        },{
            name        : 'Attribution',
            id          : 'attribution',
            order       : 5,
            userDefined : false,
            charts      : [{
                    chartId : 'attributionMaster_grid',
                    order   : 1
                },{
                    chartId: 'attribution_column',
                    order   : 2
                },{
                    chartId: 'attribution_bar',
                    order   : 3
                },{
                    chartId: 'attribution_grid',
                    order   : 4
                }]              
        },{
            name        : 'Fixed Income',
            id          : 'fixedIncome',
            order       : 6,
            userDefined : false,
            charts      : [{
                    chartId : 'fixedIncomeContribution_grid',
                    order   : 1
                },{
                    chartId: 'fixedIncomeContribution_bar',
                    order   : 2
                },{
                    chartId: 'carryContribution_bar',
                    order   : 3
                },{
                    chartId: 'yieldCurveContribution_bar',
                    order   : 4
                },{
                    chartId: 'riskNumbers_bar',
                    order   : 5
                },{
                    chartId: 'interestRatesExposure_column',
                    order   : 6
                },{
                    chartId: 'creditSpreadsExposure_column',
                    order   : 7
                },{
                    chartId: 'dv01Exposure_column',
                    order   : 8
                },{
                    chartId: 'fixedIncome_grid',
                    order   : 9
                },{
                    chartId: 'fixedIncomeExposure_grid',
                    order   : 10
                }]   
        },{
            name        : 'User Defined Test Page',
            id          : 'test1',
            order       : 100,
            userDefined : true,
            charts      : [{
                    chartId: 'fi_contribution_group',
                    order   : 1
                }]             
        }]
    });

    // Public
    function restoreDefaults() {
        analysisPages = analysisPagesDataObj.getData();
    }

    function analysisUpdated() {
        eventManager.raiseEvent('onUpdated', analysisPagesDataObj.getData());
    }

    function init(lastUsernameUsed) {
        if (lastUsernameUsed) {
            analysisPagesDataObj.loadData(lastUsernameUsed);
        } 

        analysisUpdated();
    }
        
    analysisManager.init = init;
    analysisManager.update = init; // Alias

    return analysisManager;
});