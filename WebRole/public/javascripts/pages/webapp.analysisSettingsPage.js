﻿// ------------------------------------------
// ANALYSIS SETTINGS PAGE
// ------------------------------------------

WebAppLoader.addModule({ name: 'analysisSettingsPage', plugins: ['helper'], sharedModules: ['settings', 'pageElements'], hasEvents: true }, function () {
    var analysisSettingsPage = {},
        output               = this.getConsole(),
        eventManager         = this.getEventManager(),
        helper               = this.getPlugin('helper'),
        settings             = this.getSharedModule('settings'),
        el                   = this.getSharedModule('pageElements');

    function onAnalysisPageClick() {
        var pageId = $(this).attr("data-link");
        
        eventManager.raiseEvent('onClick', pageId);

        return false;
    }

    function onNewAnalysisPageClick() {
        var pageId = helper.createUUID();
        
        eventManager.raiseEvent('onClick', pageId);

        return false;
    }

    function create(analysisPages) {
        var analysisPage, isUserDefined, pageName, pageId, appendTo;

        // Clear the page.
        $(el.listAnalysisSettingsUserPages).html('');
        $(el.listAnalysisSettingsDefaultPages).html('');

        for (var i = 0; i < analysisPages.length; i++) {
            analysisPage    = analysisPages[i];
            pageName        = analysisPage.name;
            pageId          = analysisPage.id;
            isUserDefined   = analysisPage.userDefined;
            appendTo        = (isUserDefined)
                ? el.listAnalysisSettingsUserPages
                : el.listAnalysisSettingsDefaultPages; 
            
            if (isUserDefined) {
                $(appendTo).append(
                    $('<li>').attr('class', 'arrow').append(
                        $('<a>').attr({'href': '#', 'data-link' : pageId })
                        .html(pageName)
                        .on('click', onAnalysisPageClick)
                    )
                );
            } else {
                $(appendTo).append(
                    $('<li>').attr('class', '').append(
                        $('<a>').attr({'href': '#', 'data-link' : pageId })
                        .html(pageName)
                        // .on('click', onAnalysisPageClick)
                    )
                );  
            }
        }
    }

    $(el.addNewAnalysisPage).on('click', onNewAnalysisPageClick);

    analysisSettingsPage.create = create;

    return analysisSettingsPage;
});

/*
    $(
        '<li class="arrow">' + 
        '   <a href="#" data-link="' + link + '">' + title + '</a>' +
        '</li>'
    )
*/