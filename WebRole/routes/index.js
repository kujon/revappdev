// ------------------------------------------
// ROUTING
// ------------------------------------------

var http            = require('http'),
    os              = require('os'),
    webApi          = require('../web-api'),
    expose          = require('../node_modules/express-expose'),
    languages       = require('../languages'),
    defaultLanguage = 'en-US',
    osInfo          = {
        platform: os.platform(),
        hostname: os.hostname(),
        type: os.type(),
        arch: os.arch(),
        release: os.release(),
        uptime: os.uptime(),
        loadavg :os.loadavg(),
        totalmem :os.totalmem(),
        freemem :os.freemem(),
        cpus: os.cpus()
    };

/* ----------------------- ON/OFF ----------------------- /

var serverSideObj = {
    location: 'server side',
    sayHello: function(){
        return 'Hello from ' + this.location;
    }
}

    // res.expose(serverSideObj, 'express.serverObj');
    // res.expose(osInfo, 'express.os');

// ------------------------------------------------------ */

// ------------------------------------------
// HELPER FUNCTIONS
// ------------------------------------------

// Function to get the language dictionaries for a specific language,
// and a specific context; 'server' or 'client'.
function getLanguage(lang, host) {
    var language = lang || defaultLanguage;

    // Ensure the language culture string is all lowercase.
    language = language.charAt(0).toLowerCase() + 
               language.charAt(1).toLowerCase() + 
               '-' +
               language.charAt(3).toUpperCase() + 
               language.charAt(4).toUpperCase();

    // If the language requested doesn't exist, return the default langauge.
    return (languages[language] && languages[language][host])
        ? languages[language][host]
        : languages[defaultLanguage][host];
}

// Fucntion to retrieve the 'server' language 
// dictionaries for the passed language.
function getServerLanguage(lang) {
    return getLanguage(lang, 'server');
}

// Fucntion to retrieve the 'client' language 
// dictionaries for the passed language.
function getClientLanguage(lang) {
    return getLanguage(lang, 'client');
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
// VIEW ROUTING
// ------------------------------------------

// NOTE: These methods are distinct from the routes in routes/web-methods.js in that
// they do not attempt to return data objects when called; instead, they render views. 

// Homepage
exports.index = function (req, res) {
    var viewModel = {}, 
        requestedLanguage;
    
    // At this point, we've not called the Web API which manages 
    // the language on the server side, so we need to set the language 
    // based on the querystring provided, or the default language.
    requestedLanguage = req.query.lang || defaultLanguage;
    viewModel.lang = getServerLanguage(requestedLanguage);

    // Add some extra information to the viewModel.
    viewModel.environment = GLOBAL_ENVIRONMENT;
    viewModel.version = GLOBAL_VERSION;

    // Set client side language and system info.
    res.exposeRequire();
    res.expose(getClientLanguage(requestedLanguage), 'express.language');
    res.expose({ env: GLOBAL_ENVIRONMENT }, 'express.environment');
    res.expose(osInfo, 'express.os');
    res.expose(process.env, 'express.proc');
    // res.expose(app.settings, 'express.app');

    res.render('index', viewModel);
};

// Authentication
exports.authenticate = function (req, res, next) {
    var email, token, language;

    // Assign the culture code to a variable if we had a language 
    // specified as part of the body, otherwise use the default.
    language = req.body.lang || defaultLanguage;

    // Extract the email and authentication token from the request body.
    email = req.body.email;
    token = req.body.token;

    // Remove any previous session data.
    req.session = {};

    // Attempt to consume the service.
    webApi.initService(email, token, GLOBAL_WAPI_URI, language, function (resource) {
        var obj, currentLanguage;

        // Create an object to pass down as JSON to the calling function.
        obj = { authenticated: !resource.error };
        console.log('authenticate', resource);

        // If the authentication was unsuccessful...
        if (resource.error) {

            // We need to use the language to define error strings.
            currentLanguage = getServerLanguage(language);

            // The API doesn't return a 'username or password incorrect'
            // message, merely an HTTP 401 status code. Therefore, check
            // if the code is 401, and display a more appropriate message,
            // or use the default 'unknown error' if anything else has
            // gone wrong.
            obj.message = (resource.error.httpStatusCode === 401) ?
                currentLanguage.errors.invalidCredentialsText :
                currentLanguage.errors.unknownErrorText;

        } else {

            // Persist our authorization token in a session variable.
            req.session.token = token;

            // Otherwise, pass down the number of portfolios available to the user.
            obj.portfolioTotal = resource.data.portfolios.total;
        }
        // Respond with a confirmation object, indicating whether the
        // user's credentials have been accepted by the service.
        res.json(obj);
    });
};

// Portfolios List
exports.portfolios = function (req, res) {
    var datatype = req.body.datatype || '',
        oData = req.body.oData || {
            filter: '', // 'Code eq "EQUITY5"',
            orderby: '',
            skip: '',
            top: ''
        };

    // Attempt to consume the service.
    webApi.getPortfolios(oData, datatype, getToken(req), function (resource, datatype) {
        var viewModel = resource || {};

        // Switch on the datatype - if JSON has been requested, then return our viewmodel
        // as a simple JSON-encoded string. Otherwise, pass the model to the relevant view.
        switch (datatype) {
            case 'json':
                res.json(viewModel);
                break;
            default:
                viewModel.layout = false;
                res.render('portfolios', viewModel);
                break;
        }
    });
};

// Analysis
exports.analysis = function (req, res) {
    var datatype = req.body.datatype || '',
        maxAttempts = 3;

    // Attempt to consume the service, passing up the maxAttempts parameter.
    webApi.getPortfolioAnalysis(req.body.uri, maxAttempts, getToken(req), function (analysis) {
        var viewModel = analysis || {};

        // Switch on the datatype - if JSON has been requested, then return our viewmodel
        // as a simple JSON-encoded string. Otherwise, pass the model to the relevant view.
        switch (datatype) {
            case 'json':
                res.json(viewModel);
                break;
            default:
                // Set language and layout.
                viewModel.layout = false;
                res.render('portfolioAnalysis', viewModel);
                break;
        }
    });
};

// EULA
exports.eula = function (req, res) {
    
    // Attempt to consume the service.
    webApi.getEula('fragment', getToken(req), function (resource) {
        var viewModel = {
            eula: resource.data || {},
            layout: false
        };

        // We don't support a pure JSON version of the EULA, so 
        // in this case, we just pass the model to the view.
        res.render('eula', viewModel);
    });
};