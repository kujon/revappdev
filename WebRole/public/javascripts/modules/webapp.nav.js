// ------------------------------------------
// NAV
// ------------------------------------------

// Configuration
WebAppLoader.addModule({
    name: 'nav',
    hasEvents: true
}, 

// Constructor
function () {
    var nav             = {},
        eventManager    = this.getEventManager();

    // Navigate to an external page.
    function navigateTo(url) {
        window.location = url;
    }

    // NOTA BENE: In the current version of jQTouch, the animation property doesn't work.
    function goToPage(idPage, animation) {
        setTimeout(function () {
            jQT.goTo($(idPage), animation || 'fade');
        }, 25);
    }

    function goToPageWithCallback(idPage, animation, callback) {
        setTimeout(function () {
            jQT.goTo($(idPage), animation || 'fade');
            callback();
        }, 25);
    }

    function reloadApp(params) {
        var paramsToAdd = params || '';

        window.location = './' + paramsToAdd;
        return false;
    }

    nav.goToPage = goToPage;
    nav.goToPageWithCallback = goToPageWithCallback;
    nav.reloadApp = reloadApp;

    return nav;
});
