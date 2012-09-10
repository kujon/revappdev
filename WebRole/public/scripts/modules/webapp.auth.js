// ------------------------------------------
// AUTHENTICATION
// ------------------------------------------

// Configuration
WebAppLoader.addModule({
    name: 'auth',
    plugins: ['base64'],
    sharedModules: ['ajaxManager', 'localizationManager'],
    hasEvents: true
}, 

// Constructor
function () {
    var auth            = {},
        output          = this.getConsole(),
        eventManager    = this.getEventManager(),
        base64          = this.getPlugin('base64'),
        ajaxManager     = this.getSharedModule('ajaxManager'),
        lang            = this.getSharedModule('localizationManager').getLanguage() || {},
        hash            = '';

    function doLogin(username, password, url, language) {
        var regex, token, tokenHash;
        
        // For the reasoning behind this regular expression over others for email
        // validation, please read http://www.regular-expressions.info/email.html
        // or trawl the many discussions on Stack Overflow.
        // NOTE: The 'i' parameter means the email is treated case-insensitively.
        regex = new RegExp('^[A-Z0-9._%+-]+@[A-Z0-9.-]+\\.[A-Z]{2,4}$', 'i');

        // If the username or password are not specified, or the username
        // isn't a valid email address, fail the login attempt.
        if (!username || !password || !regex.test(username)) {
            eventManager.raiseEvent('onLoginFailed', lang.errors.noCredentialsProvidedText);
            return;
        }

        hash = '';
        tokenHash = base64.encode(username + ':' + password);
        token = 'Basic ' + tokenHash;

        // Post the created token and the user's email to the authenticate action.
        ajaxManager.post(url, { email: username, token: token, lang: language }, function (response) {
            // If our response indicates that the user has been authenticated...
            if (response.authenticated) {
                hash = tokenHash;
                eventManager.raiseEvent('onLoginSuccess', token);
            } else {
                eventManager.raiseEvent('onLoginFailed', response.message);
            }
        }, 'json');
    }

    function getHash() {
        return hash;
    }

    auth.doLogin = doLogin;
    auth.getHash = getHash;

    return auth;
});
