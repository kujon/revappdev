// ------------------------------------------
// WEB API MODULE
// ------------------------------------------

// Module Dependencies
var https           = require('https'),
    path            = require("path"),
    url             = require("url"),
    languages       = require('./languages'),
    defaultLanguage = 'en-US',
    currentLanguage = {},
    currentAnalysis = {},
    resourceLinks = {},
    RETRY_ATTEMPTS  = 3,
    MAX_ATTEMPTS    = 3;

// ------------------------------------------
// LANGUAGE HELPER FUNCTIONS
// ------------------------------------------

// Returns the server-side language dictionary 
// object for the current user, or null if not defined.
// 'token'      - A Base64-encoded string representing a user's username and password.
function getCurrentDictionary(token) {
    return currentLanguage[token]['object'] || null;
}

// Returns the current language culture code string 
// for the current user, or null if not defined.
// 'token'      - A Base64-encoded string representing a user's username and password.
function getCurrentLanguage(token) {
    return currentLanguage[token]['string'] || null;
}
// Sets the current language culture code string and 
// the server-side language dictionary for the current user.
// 'token'      - A Base64-encoded string representing a user's username and password.
// 'value'      - (Optional) A language culture code to be set as the current language.
function setCurrentLanguage(token, value) {
    var language = value || defaultLanguage;

    language = language.charAt(0).toLowerCase() +
               language.charAt(1).toLowerCase() +
               '-' +
               language.charAt(3).toUpperCase() +
               language.charAt(4).toUpperCase();
    
    // If the language requested doesn't actually exist in the app...
    if (!languages[language]) {
        // ...return to the default.
        language = defaultLanguage;
    }

    // If the language for this user is not yet defined, 
    // create an empty object to store the preferences.
    if (!currentLanguage[token]){
        currentLanguage[token] = {};
    }

    // Define references to the current language code, and the
    // string resource dictionary for use on the server side.
    currentLanguage[token]['string'] = language;
    currentLanguage[token]['object'] = languages[language]['server'];
}

// ------------------------------------------
// ANALYSIS HELPER FUNCTIONS
// ------------------------------------------

function getCurrentAnalysis(token, resource){
    if (resource) {
        return currentAnalysis[token][resource] || null;
    } else {
        return currentAnalysis[token] || null;
    }
}

function setCurrentAnalysis(token, analysis, value){
    if (!currentAnalysis[token]){
        currentAnalysis[token] = {};
    }

    currentAnalysis[token][analysis] = value || null;
}

// ------------------------------------------
// RESOURCE LINKS HELPER FUNCTIONS
// ------------------------------------------

function getResourceLink(token, resource){
    return resourceLinks[token][resource];
}

function setResourceLink(token, resource, link){
    if (!resourceLinks[token]){
        resourceLinks[token] = {};
    }

    resourceLinks[token][resource] = link;
}

// ------------------------------------------
// API HELPER FUNCTIONS
// ------------------------------------------

// Generates and returns a configuration object for an HTTP GET request.
// 'uri'    - The Uniform Resource Identifier of the resource to be requested.
// 'token'  - A Base64-encoded string representing a user's username and password.
function getRequestOptions(uri, token) {
    var hostName, pathName, queryString;

    // Extract the hostname, querystring and path from the URI.
    hostName = url.parse(uri).host;
    queryString = url.parse(uri).search || '';
    pathName = url.parse(uri).pathname + queryString;

    return {
        host: hostName,
        port: '443',
        path: pathName,
        method: 'GET',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            'Authorization': token
        }
    };
}

// Processes the HTTP response from the Revolution Web API, and provides,
// if required, a localized error message depending on:
//
// 1) The HTTP status code returned as standard
// 2) A custom error code returned by the Revolution Web API 
//
// 'statusCode' - The HTTP status code returned by the response.
// 'data'       - The body content of the response.
function processResponse(statusCode, data, token) {
    var parts, code, error, dictionary;

    // If the HTTP status code isn't an error...
    if (statusCode < 400) {
        // ...there's nothing else to do, so return false.
        return false;
    }

    // Get our error dictionary.
    dictionary = getCurrentDictionary(token).errors;

    // Assume this is an unknown error.
    error = {
        message: dictionary.unknownErrorText,
        httpStatusCode: statusCode,
        internalErrorCode: null
    };

    // We've got an error, so the data could contain a custom error message
    // from the Revolution Web API. Attempt to split on the semi-colon.
    parts = data.split(';');

    // If the content has split successfully, and the first element in the
    // array contains 'REVAPI_ERROR', we have a custom error.
    if (parts.length > 1 && parts[0].indexOf('REVAPI_ERROR') !== -1) {

        // Retrieve the custom error code.
        code = parseInt(parts[0].split('=')[1], 10);

        // Default to the message actually returned from the API,
        // and persist the custom error code in our error object.
        error.internalErrorCode = code;
        error.message = parts[1];

        // If the custom error code matches a resource in the language dictionary when we
        // adding the 'error' prefix necessary to retrieve a potential localized message 
        // from the language file...
        if (dictionary['error' + code]) {
            // ...use that message instead of the one returned by the API.
            error.message = dictionary['error' + code];
        }
    }

    // Return the error object.
    return error;
}

// Constructs, sends, and attempts to parse the response from an HTTP request
// for a particular resource.
// 'resourceName'   - A string defining the JSON root property for the data requested.
// 'attempts'       - A number indicating how many attempts at calling this function 
//                    after a timeout remain before we should give up.
// 'options'        - An object created by the getRequestOptions function, containing
//                    the required parameters to make a resource request.
// 'callback'       - A JavaScript function to be called when the response has arrived.
//                    Will always be called, regardless of the outcome of the request,
//                    and will receive an object containing a 'data' property, which 
//                    may be null, and an error property, which will either be boolean false 
//                    (indicating that the request was successful), a boolean true, or a 
//                    complete error object (both indicating that the request failed).
function getResource(resourceName, attempts, options, token, callback) {
    var request, data = '', resource;

    // Define an empty resource object.
    resource = {
        data: null,
        error: false
    };

    // Define the current attempt limit.
    attempts = (attempts > MAX_ATTEMPTS) ? MAX_ATTEMPTS : attempts;

    // Set up the request.
    request = https.request(options, function (response) {

        // Define the encoding for the response.
        response.setEncoding('utf8');

        // Attach an event handler to the 'data' event, which will 
        // be raised every time the response sends a chunk of data.
        response.on('data', function (chunk) {
            // Concatenate the latest chunk onto the existing data string.
            data += chunk;
        });

        // Attach an event handler to the 'end' event, which will be 
        // raised once all chunks have been sent via the 'data' event.
        response.on('end', function () {
            var obj, error;

            // Process the response.
            error = processResponse(response.statusCode, data, token);            

            // If we've had an error object returned by the processing of the response...
            if (error) {

                // ...an error has occurred, so we've got no data.
                resource.data = null;
                // Add the error object we've been provided.
                resource.error = error;

            } else {

                try {

                    // Attempt to parse our JSON into an object we can use.
                    obj = JSON.parse(data);
                    // Assign the requested property as our returnable resource.
                    resource.data = obj[resourceName];

                } catch (e) {
                
                    // Something went wrong while parsing, so just assign the data we've
                    // got to the resource object.
                    resource.data = data;

                    // Use the response processor to generate an error 
                    // object if we didn't expect the JSON parsing to fail.
                    if (resourceName !== null) {
                        resource.error = processResponse(500, data);
                    }
                }
            }

            // Invoke the callback function, passing the resource object.
            callback(resource);
        });
    });

    // Attach an error event handler in the event that the request fails entirely.
    request.on('error', function (e) {
        var isTimeoutError;

        // Determine whether we're looking at a timeout error.
        isTimeoutError = (e && e.code && e.code.indexOf('10060') !== -1);

        // If we're out of attempts, or the error isn't a timeout...
        if (attempts === 0 || !isTimeoutError) {                    
            
            // Add an error to the resource.
            resource.error = true;
            
            // Return early with the error resource.
            callback(resource);
            return;
        }

        // In the event of a timeout, educe the number of attempts remaining.
        attempts -= 1;

        // Attempt to get the resource again.
        getResource(resourceName, attempts, options, token, callback);
    });

    // Post the data.
    request.end();
}

// Replaces filter placeholders in URIs.
// Returns the given URI string with placeholders replaced with appropriate values.
// 'oData'  - An object containing filtering values to be inserted into the URI. 
// 'uri'    - The Uniform Resource Identifier, which contains filter placeholders 
//            to be replaced by the oData property values.
function applyODataToURI(oData, uri) {
    var filter = oData.filter || '',
        orderby = oData.orderby || '',
        skip = oData.skip || '',
        top = oData.top || '';

    // Replace the placeholders, ensuring that the filter and orderby strings are suitably 
    // escaped, since their syntax can require the use of whitespace and special characters.
    if (uri) {
        uri = uri.replace('{filter}', escape(filter))
                 .replace('{orderby}', escape(orderby))
                 .replace('{skip}', skip)
                 .replace('{top}', top);
    }
    
    return uri;
}

// Replaces segments tree node placeholders in URIs.
// Returns the given URI string with placeholders replaced with appropriate values.
// 'params'  - An object containing parameter values to be inserted into the URI. 
// 'uri'    - The Uniform Resource Identifier, which contains filter placeholders 
//            to be replaced by the oData property values.
function applySegmentParamsToURI(params, uri) {
    var timePeriods = params.timePeriods || '',
        include = params.include || '',
        measures = params.measures || '',
        includeMeasuresFor = params.includeMeasuresFor || '',
        startDate = params.startDate || '',
        endDate = params.endDate || '',
        seriesType = params.seriesType || '';

    uri = uri.replace('{timePeriodsList}', timePeriods)
             .replace('{dataToInclude}', include)
             .replace('{measuresList}', measures)
             .replace('{measuresFor}', includeMeasuresFor)
             .replace('{startDate}', startDate)
             .replace('{endDate}', endDate)
             .replace('{seriesType}', seriesType);

    return uri;
}

// ------------------------------------------
// PUBLIC METHODS
// ------------------------------------------

// Attempts to consume the StatPro Revolution Web API, persists user details,
// and creates references to commonly used resources.
// 'email'      - The user's email, used as a username to log in to the system.
// 'token'      - A Base64-encoded string representing a user's username and password.
// 'uri'        - The Uniform Resource Identifier representing the entry point of the Web API.
// 'language'   - An object containing display strings for use on the server side.
//                This will be localized if the request contains a valid 'lang' 
//                querystring, otherwise defaulting to 'en-US'.
// 'callback'   - A JavaScript function to be called when the response has arrived.
//                Will always be called, regardless of the outcome of the request,
//                and will receive an object containing a 'data' property, which 
//                may be null, and an error property, which will either be boolean false 
//                (indicating that the request was successful), a boolean true, or a 
//                complete error object (both indicating that the request failed).
exports.initService = function (email, token, uri, language, callback) {
    var options;

    // Generate the request configuration.
    options = getRequestOptions(uri, token);

    // Set the current language.
    setCurrentLanguage(token, language);

    // Attempt to get the service's entry point resource.
    getResource('service', RETRY_ATTEMPTS, options, token, function (resource) {
        
        if (!resource.error && resource.data) {
            // Populate the resources object.
            setResourceLink(token, 'eula', resource.data.eula.links.self.href);
            setResourceLink(token, 'portfolios', resource.data.portfolios.links.portfoliosQuery.href);
        }

        // Invoke the callback function, passing in the resource JSON.
        callback(resource);
    });
};

// Attempts to retrieve a list of portfolios, optionally filtered by oData values.
// 'oData'      - An object containing filtering values to be inserted into a URI. 
// 'datatype'   - A string defining whether the resource should be returned as HTML or JSON.
// 'token'      - A Base64-encoded string representing a user's username and password.
// 'callback'   - A JavaScript function to be called when the response has arrived.
//                Will always be called, regardless of the outcome of the request,
//                and will receive an object containing a 'data' property, which 
//                may be null, and an error property, which will either be boolean false 
//                (indicating that the request was successful), a boolean true, or a 
//                complete error object (both indicating that the request failed).
exports.getPortfolios = function (oData, datatype, token, callback) {
    var uri, options, portfoliosQuery;

    // Determine which URI to send our resource request to.
    uri = getResourceLink(token, 'portfolios') || null;

    if (uri) {

        // Format a portfolio querystring based on the oData and the portfolio resource link.
        portfoliosQuery = applyODataToURI(oData, uri);

        // Generate the request configuration based on the portfolio query.
        options = getRequestOptions(portfoliosQuery, token);

        // Attempt to get a list of the user's portfolios, filtered by the query.
        getResource('portfolios', RETRY_ATTEMPTS, options, token, function (resource) {
            callback(resource, datatype);
        });

    } else {
        console.log('getPortfolios - no URI');
    }
};

// Attempts to retrieve the default analysis for the requested portfolio.
// 'uri'            - The Uniform Resource Identifier representing the default analysis resource.
// 'attempts'       - The attempts setting specifies the maximum number of times to try 
//                    access to the resource.
// 'token'          - A Base64-encoded string representing a user's username and password.
// 'callback'       - A JavaScript function to be called when the response has arrived.
//                    Will always be called, regardless of the outcome of the request,
//                    and will receive an object containing a 'data' property, which 
//                    may be null, and an error property, which will either be boolean false 
//                    (indicating that the request was successful), a boolean true, or a 
//                    complete error object (both indicating that the request failed).
exports.getPortfolioAnalysis = function (uri, attempts, token, callback) {
    var options;

    // Generate the request configuration.
    options = getRequestOptions(uri, token);

    attempts = (attempts > MAX_ATTEMPTS) ? MAX_ATTEMPTS : attempts;

    // Attempt to get the portfolio analysis for the requested portfolio.
    // NOTE: The RETRY_ATTEMPTS parameter passed here has nothing to do with 
    // the additional retry logic in the callback, which deals with retrying 
    // to retrieve portfolio analyses which have either not finished calculating, 
    // or have failed to calculate for some reason.
    getResource('portfolioAnalysis', RETRY_ATTEMPTS, options, token, function (resource) {
        var status, dictionary;

        if (!resource.error && resource.data) {

            // Determine the current status of the analysis.
            status = resource.data.analysis.status;

            // If the current analysis is still calculating or there were errors...
            if (status === 'InProgress' || status === 'FailedWithErrors') {
                
                if (attempts === 0) {
                    
                    // Add an error to the resource.
                    resource.error = true;

                    // Return early with the error resource.
                    callback(resource);
                    return;
                }

                attempts -= 1;
                
                // ...attempt to get the last successful analysis.
                uri = uri.replace('lastSuccessful=false', 'lastSuccessful=true');
                
                // Use the modified URI with this function.
                exports.getPortfolioAnalysis(uri, attempts, token, callback);
                
                return;
            }

            // Populate the resources object.
            setResourceLink(token, 'segmentsTreeNode', resource.data.analysis.results.links.segmentsTreeRootNodeQuery.href);
            setResourceLink(token, 'timeSeries', resource.data.analysis.results.links.timeSeriesQuery.href);

            // Persist the current analysis' currency and stats frequency for other API calls.
            setCurrentAnalysis(token, 'currency', resource.data.analysis.currency);
            setCurrentAnalysis(token, 'statisticsFrequency', resource.data.analysis.statisticsFrequency);

        } else { 
                    
            // Add an error to the resource.
            resource.error = true;

        }

        callback(resource);
    });
};

// Attempts to retrieve the specified segment tree nodes for the requested portfolio.
// 'oData'      - An object containing filtering values to be inserted into a URI. 
// 'params'     - An object containing additional parameter values to be inserted into a URI. 
// 'token'      - A Base64-encoded string representing a user's username and password.
// 'callback'   - A JavaScript function to be called when the response has arrived.
//                Will always be called, regardless of the outcome of the request,
//                and will receive an object containing a 'data' property, which 
//                may be null, and an error property, which will either be boolean false 
//                (indicating that the request was successful), a boolean true, or a 
//                complete error object (both indicating that the request failed).
exports.getSegmentsTreeNode = function (oData, params, token, callback) {
    var options, filterQuery, segmentsTreeNodeQuery, uri;

    // Determine which URI to send our resource request to.
    uri = params.url || getResourceLink(token, 'segmentsTreeNode') || null;

    if (uri) {

        // Format a segments tree node querystring based on the oData and the tree node resource link.
        filterQuery = applyODataToURI(oData, uri);

        // Format the querystring with filters applied to add further parameters.
        segmentsTreeNodeQuery = applySegmentParamsToURI(params, filterQuery);

        // Generate the request configuration based on the segment tree node query.
        options = getRequestOptions(segmentsTreeNodeQuery, token);

        // Attempt to get the specified segment tree nodes.
        getResource('segmentsTreeNode', RETRY_ATTEMPTS, options, token, function (resource) {
            callback(resource, getCurrentAnalysis(token), getCurrentLanguage(token));
        });

    } else {
        console.log('getSegmentsTreeNode - no URI');
    }
};

// Attempts to retrieve the specified time series for the requested portfolio.
// 'params'     - An object containing additional parameter values to be inserted into a URI. 
// 'token'      - A Base64-encoded string representing a user's username and password.
// 'callback'   - A JavaScript function to be called when the response has arrived.
//                Will always be called, regardless of the outcome of the request,
//                and will receive an object containing a 'data' property, which 
//                may be null, and an error property, which will either be boolean false 
//                (indicating that the request was successful), a boolean true, or a 
//                complete error object (both indicating that the request failed).
exports.getTimeSeries = function (params, token, callback) {
    var uri, options, timeSeriesQuery;

    // Determine which URI to send our resource request to.
    uri = params.url || getResourceLink(token, 'timeSeries') || null;

    if (uri) {

        // Format the querystring with filters applied to add further parameters.
        timeSeriesQuery = applySegmentParamsToURI(params, uri);

        // Generate the request configuration based on the time series query.
        options = getRequestOptions(timeSeriesQuery, token);

        // Attempt to get the specified time series.
        getResource('timeSeries', RETRY_ATTEMPTS, options, token, function (resource) {
            callback(resource, getCurrentAnalysis(token), getCurrentLanguage(token));
        });

    } else {
        console.log('getTimeSeries - no URI');
    }
};

// Attempts to retrieve the End User Licence Agreement in the specified format.
// 'eulaFormat' - A string defining the format in which the EULA should be provided.
//                Can be one of: 'document' (retrieves the HTML fragment and Revolution 
//                CSS), 'fragment' (retrieves only the HTML fragment), 'css' (retrieves
//                only the EULA CSS). If undefined, will default to 'document' format.
// 'token'      - A Base64-encoded string representing a user's username and password.
// 'callback'   - A JavaScript function to be called when the response has arrived.
//                Will always be called, regardless of the outcome of the request,
//                and will receive an object containing a 'data' property, which 
//                may be null, and an error property, which will either be boolean false 
//                (indicating that the request was successful), a boolean true, or a 
//                complete error object (both indicating that the request failed).
exports.getEula = function (eulaFormat, token, callback) {
    var options;

    function getEulaDoc(eulaUri) {
        // Generate the request configuration.
        options = getRequestOptions(eulaUri, token);
        // Attempt to get the EULA.
        // NOTE: We pass up null here as the resourceName as we don't 
        // expect a standard JavaScript object resource back, rather 
        // an HTML fragment to be rendered in its entirety.
        getResource(null, RETRY_ATTEMPTS, options, token, function (eulaDoc) {
            callback(eulaDoc);
        });
    }

    // Generate the request configuration.
    options = getRequestOptions(getResourceLink(token, 'eula'), token);

    // Attempt to get the EULA link dependent on the format requested.
    getResource('eula', RETRY_ATTEMPTS, options, token, function (resource) {
        var eulaUri = '';
        
        switch (eulaFormat) {
            case 'document':
                eulaUri = resource.data.links.eulaDocument.href;
                break;
            case 'fragment':
                eulaUri = resource.data.links.eulaFragment.href;
                break;
            case 'css':
                eulaUri = resource.data.links.eulaFragmentStyles.href;
                break;
            default:
                eulaUri = resource.data.links.eulaDocument.href;
                break;
        }
        
        // Use the URI specified to retrieve the EULA.
        getEulaDoc(eulaUri);
    });    
};