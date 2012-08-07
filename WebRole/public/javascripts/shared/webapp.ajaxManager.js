// ------------------------------------------
// AJAX MANAGER
// ------------------------------------------

WebAppLoader.addModule({ name: 'ajaxManager', hasEvents: true, isShared: true }, function () {

    var ajaxManager  = {},
        output       = this.getConsole(),
        eventManager = this.getEventManager(),
        token        = '';

    // Public
    function getToken() {
        return token;
    }

    // Public
    function setToken(tokenValue) {
        token = tokenValue || null;
    }

    // Public
    function post(urlValue, dataValue, callbackValue, typeValue) {
        var url      = '',
            data     = {},
            type     = typeValue,
            callback = callbackValue || null;

        url = urlValue;

        if (typeof dataValue !== 'function') {
            data = dataValue || {};
            if (token && !data.token) {
                data.token = token;
            }
        } else {
            callback = dataValue;
            type = callbackValue;
        }

        $.post(url, data, callback, type);

    }

    function get() {

    }

    ajaxManager.post = post;
    ajaxManager.getToken = getToken;
    ajaxManager.setToken = setToken;
    ajaxManager.get = get;

    return ajaxManager;
});