var webApi          = require('../web-api'),
    adapters        = require('../adapters'),
    languages       = require('../languages'),
    defaultLanguage = 'en-US';

// ------------------------------------------
// LANGUAGE HELPER FUNCTIONS
// ------------------------------------------

// Function to get the 'server' language dictionary for a specific language.
function getServerLanguage(lang) {
    var language = lang || defaultLanguage;

    language = language.charAt(0).toLowerCase() +
               language.charAt(1).toLowerCase() +
               '-' +
               language.charAt(3).toUpperCase() +
               language.charAt(4).toUpperCase();

    return (languages[language] && languages[language]['server']) ? 
            languages[language]['server'] : 
            languages[defaultLanguage]['server'];
}

// Function to get the token stored either in the currently 
// implemented session storage, or the body of the request.
function getToken(req) {
    var sessionToken = null,
        bodyToken    = null;

    // If we've got a token in session, retrieve it.
    if (req && req.session) {
        sessionToken = req.session.token;
    }

    // If we've got a token in the body, retrieve it.
    if (req && req.body) {
        bodyToken = req.body.token;
    }

    // Prioritise the token we've stored in the session.
    return sessionToken || bodyToken;
}

// ------------------------------------------
// WEB METHOD ROUTING
// ------------------------------------------

// NOTE: These methods are distinct from the routes in routes/index.js in that
// they do not attempt to render views when called; instead, they return data objects.

// Local Authentication Confirmation
exports.isUserAuthenticated = function (req, res) {
    // If the token variable in the session is not truthy, we 
    // haven't got one, and the user is not authenticated.
    res.json({ authenticated: !req.session.token });
};

// Segments Tree Node Retrieval
exports.segmentsTreeNode = function (req, res) {
    var params,
        adapter,
        oData = req.body.oData || {
            filter: '', // 'Code eq "EQUITY5"',
            orderby: '',
            skip: '',
            top: ''
        };

    // Get the correct adapter dependent on the chart type.
    adapter = adapters[req.body.type];

    // Define the parameters for the segment tree node call, including 
    // defaults if the request body doesn't contain any.
    params = {
        timePeriods: req.body.timePeriods,
        include: req.body.include,
        measures: req.body.measures,
        includeMeasuresFor: req.body.includeMeasuresFor
    };

    // Attempt to consume the service.
    webApi.getSegmentsTreeNode(oData, params, getToken(req), function (segments, analysis, language) {
        var currentLanguage, jsonObj = {};

        // Retrieve the language passed from the API.
        currentLanguage = getServerLanguage(language);

        // If we have any segment data...
        if (segments && segments.data) {
            // ...pass the segments and other parameters to this chart's
            // data adapter, which returns a JSON-encoded object suitable 
            // for use with the Google Visualization API.
            jsonObj = adapter.convert(
                segments.data,
                req.body.includeMeasuresFor,
                analysis,
                req.body.measures,
                currentLanguage            
            );
        }

        // Return the JSON.
        res.json(jsonObj);
    });
};

// Time Series Retrieval
exports.timeSeries = function (req, res) {
    var params, adapter;

    // Get the correct adapter dependent on the chart type.
    adapter = adapters[req.body.type];

    // Define the parameters for the segment tree node call, including 
    // defaults if the request body doesn't contain any.
    params = {        
        endDate: req.body.endDate,
        startDate: req.body.startDate,
        measures: req.body.measures,
        seriesType: req.body.seriesType,
        include: req.body.include
    };

    // Attempt to consume the service.
    webApi.getTimeSeries(params, getToken(req), function (series, analysis, language) {
        var currentLanguage, jsonObj = {};

        // Retrieve the language passed from the API.
        currentLanguage = getServerLanguage(language);

        // If we have any series data...
        if (series && series.data && series.data.dataPoints) {
            // ...pass the series and other parameters to this chart's
            // data adapter, which returns a JSON-encoded object suitable 
            // for use with the Google Visualization API.
            jsonObj = adapter.convert(
                series.data.dataPoints,
                req.body.seriesType,
                analysis,            
                req.body.measures,
                currentLanguage
            );
        }

        // Return the JSON.
        res.json(jsonObj);
    });
};