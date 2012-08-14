﻿// ------------------------------------------
// TOOLBAR
// ------------------------------------------

// Configuration
WebAppLoader.addModule({
    name: 'toolbar',
    plugins: ['helper'],
    sharedModules: ['pageElements'],
    hasEvents: true
}, 

// Constructor
function () {
    var toolbar          = {},
        output           = this.getConsole(),
        eventManager     = this.getEventManager(),
        el               = this.getSharedModule('pageElements'),
        helper           = this.getPlugin('helper'),
        toolbarId        = '',
        buttons          = [],
        buttonIndices    = {},
        visible          = true,
        buttonWidth      = 30,
        buttonPadding    = 25,
        buttonsCount     = 0;

    $(el.toolbar).click(function () {
        eventManager.raiseEvent('onTap');
        output.log('toolbar tapped!');
    });
    
    // Enlarge and center the title to prevent ellipsis.
    $('#jqt .toolbar > h1').width('80%').css({ 'margin': '0 0 0 -40%'});

    function getButton(index) {
        if (typeof index == 'string') {
            index = buttonIndices[index];
        }

        return buttons[index];
    }

    function create(config) {
        var buttonPrefix = config.buttonPrefix || 'toolbar_btn';

        toolbarId = config.toolbarId || '.toolbar';
        visible = helper.getValueAs(config.visible, 'boolean');

        $.each(config.items, function (i, val) {
            var id = helper.capitaliseFirstLetter(val.id);

            buttonIndices[val.id] = i;
            buttons[i] = {
                id: val.id,
                buttonId: buttonPrefix + id,
                title: val.title,
                btnClass: val.btnClass,
                eventHandler: 'on' + id + 'Tap',
                isDisabled: false,
                isSelected: false,
                isHidden: false,
                select: function () {
                    var button     = $('#' + buttons[i].buttonId),
                        classOn    = buttons[i].btnClass + '_on',
                        classOff   = buttons[i].btnClass + '_off';
                    
                    button.removeClass(classOff);
                    button.addClass(classOn);
                    this.isSelected = true;
                },
                deselect: function () {
                    var button     = $('#' + buttons[i].buttonId),
                        classOn    = buttons[i].btnClass + '_on',
                        classOff   = buttons[i].btnClass + '_off';
                    
                    button.removeClass(classOn);
                    button.addClass(classOff);
                    this.isSelected = false;
                },
                show: function () {
                    var button     = $('#' + buttons[i].buttonId);
                    
                    button.show();
                    this.isHidden = false;
                },
                hide: function () {
                    var button     = $('#' + buttons[i].buttonId);
                    
                    button.hide();
                    this.isHidden = true;
                }
            };

            $(toolbarId).append(
                $('<div>')
                    .addClass('toolbar_button ' + buttons[i].btnClass + '_off')
                    .attr({ 
                        id: buttons[i].buttonId,
                        style: 'right: ' + (buttonsCount * buttonWidth + buttonPadding) + 'px;'
                    })
                    .on('click', function(event){
                        var isSelected = buttons[i].isSelected,
                            classOn    = buttons[i].btnClass + '_on',
                            classOff   = buttons[i].btnClass + '_off';
                        
                        output.log('toolbar button tapped!');
                        
                        if (isSelected) {
                            isSelected = false;
                            $(this).removeClass(classOn);
                            $(this).addClass(classOff);
                        } else {
                            isSelected = true;
                            $(this).removeClass(classOff);
                            $(this).addClass(classOn);
                        }
                        
                        buttons[i].isSelected = isSelected;
                        eventManager.raiseEvent(buttons[i].eventHandler, isSelected);
                        event.stopPropagation();
                    })
            );

            buttonsCount += 1;
        });
    }

    toolbar.create = create;
    toolbar.getButton = getButton;

    return toolbar;
});