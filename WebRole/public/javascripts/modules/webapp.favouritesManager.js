// ------------------------------------------
// FAVOURITES MANAGER
// ------------------------------------------

// Configuration
WebAppLoader.addModule({
    name: 'favouritesManager',
    sharedModules: [],
    dataObjects: ['favourites'],
    hasEvents: true
}, 

// Constructor
function () {

    var favouritesManager    = {},
        output               = this.getConsole(),
        eventManager         = this.getEventManager(),
        favouritesDataObj    = this.getDataObject('favourites');

    favouritesDataObj.define({
        items: []
    });

    function createIdFromAnalysisDataObject(analysisDataObject) {
        var favouriteId = null,
            dataObj     = analysisDataObject;

        if (dataObj.portfolioId &&  dataObj.analysisId && dataObj.timePeriodId) {
            favouriteId = dataObj.portfolioId +  dataObj.analysisId + dataObj.timePeriodId;
        }

        return favouriteId;
    }
    
    function getFavourteFromAnalysisDataObject(analysisDataObject) {
        var favouriteObj = {};

        favouriteObj.title        = analysisDataObject.portfolioName + ' - ' +
                                    analysisDataObject.analysisName + ' - ' +
                                    analysisDataObject.timePeriodName;
        favouriteObj.favouriteId  = analysisDataObject.portfolioId +
                                    analysisDataObject.analysisId +
                                    analysisDataObject.timePeriodId;
        favouriteObj.portfolioId  = analysisDataObject.portfolioId;
        favouriteObj.analysisId   = analysisDataObject.analysisId;
        favouriteObj.timePeriodId = analysisDataObject.timePeriodId;

        return favouriteObj;
    }

    function getAnalysisDataObjectFromFavourte(favouriteId) {
        var favourites         = favouritesDataObj.getData(),
            analysisDataObject = null,
            favourite          = {},
            i                  = 0;

        for (i = 0; i < favourites.items.length; i++) {
            favourite = favourites.items[i];
            if (favourite.favouriteId === favouriteId) {
                // Create a new analysisDataObject and populate it with
                // values from favourite.
                analysisDataObject = {}; 
                analysisDataObject.portfolioId = favourite.portfolioId;
                analysisDataObject.analysisId = favourite.analysisId;
                analysisDataObject.timePeriodId= favourite.timePeriodId;
                return analysisDataObject;   
            }
        }

        return analysisDataObject;
    }

    // NOTA BENE: This function is declared but not yet implemented.
    function favouriteExists(favouriteId) {
        var favourites = favouritesDataObj.getData();
    }

    function favouritesUpdated() {
        eventManager.raiseEvent('onFavouritesUpdated', favouritesDataObj.getData());
    }

    function init(lastUsernameUsed) {
    
        if (lastUsernameUsed) {
            favouritesDataObj.loadData(lastUsernameUsed);
        } 

        favouritesUpdated();
    }
        
    favouritesManager.init = init;
    favouritesManager.update = init; // Alias
    favouritesManager.createIdFromAnalysisDataObject = createIdFromAnalysisDataObject;
    favouritesManager.getFavourteFromAnalysisDataObject = getFavourteFromAnalysisDataObject;
    favouritesManager.favouriteExists = favouriteExists;
    favouritesManager.getAnalysisDataObjectFromFavourte = getAnalysisDataObjectFromFavourte;

    return favouritesManager;
});