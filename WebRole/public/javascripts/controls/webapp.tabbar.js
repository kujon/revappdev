﻿// ------------------------------------------
// TABBAR
// ------------------------------------------

WebAppLoader.addModule({ name: 'tabbar', plugins: ['helper'], hasEvents: true }, function () {
    var tabbar          = {},
        output          = this.getConsole(),
        eventManager    = this.getEventManager(),
        helper          = this.getPlugin('helper'),
        tabbarId        = '',
        buttons         = [],
        buttonIndices   = {},
        visible         = true;

    function hide() {
        // $(tabbarId).hide();
        output.log('tabbar.hide()');
        $(tabbarId).css({ opacity: 0 });
        visible = false;
    }

    function show() {
        $(tabbarId).css({ opacity: 1 });
        visible = true;
        output.log('tabbar.show()');
    }

    function getButton(index) {
        if (typeof index == 'string') {
            index = buttonIndices[index];
        }

        return buttons[index];
    }

    function create(config) {
        var buttonPrefix    = config.buttonPrefix || 'tabbar_btn',
            badgePrefix     = 'tabbar_badge',
            doubleTapSpeed  = 2000;

        tabbarId = config.tabbarId || 'nav#tabbar';
        visible = (typeof config.visible == 'boolean')
                ? config.visible
                : true;

        $.each(config.items, function (i, val) {
            var id          = helper.capitaliseFirstLetter(val.id),
                itemsCount  = config.items.length || 1,
                buttonWidth = 100 / itemsCount;

            buttonIndices[val.id] = i;
            buttons[i] = {
                id: val.id,
                linkId: buttonPrefix + id,
                badgeId: badgePrefix + id,
                title: val.title,
                btnClass: val.btnClass,
                highlight: val.highlight || false,
                preventDoubleTap: val.preventDoubleTap || false,
                isPreventingTap: false,
                eventHandler: 'on' + id + 'Tap',
                isHighlighted: false,
                isDisabled: false,
                setHighlight: function (highlighted) {
                    var tabbarItem = $('#' + this.linkId);

                    if(this.highlight) {
                        this.isHighlighted = !highlighted;
                        if (this.isHighlighted) {
                            $("#tabbar a").removeClass("current");
                            $("#tabbar div").removeClass("current");
                            this.isHighlighted = false;    
                        } else {
                            $("#tabbar a").addClass("current").not(tabbarItem).removeClass("current");
                            $("#tabbar div").addClass("current").not(tabbarItem).removeClass("current");
                            this.isHighlighted = true;
                        }
                    }
                },
                toggleHighlighted: function () {
                    if (this.highlight) {
                        this.setHighlight(!this.isHighlighted);
                    }
                },
                setDisabled: function (disabled) {
                    var opacity = (disabled) ? 0.20 : 1,
                            badgeBackColor = (disabled) ? '#333' : '#f00';

                    this.isDisabled = disabled;
                    $('#' + this.linkId).css({ opacity: opacity });
                    $('#' + this.badgeId).css({ backgroundColor: badgeBackColor });

                },
                setBadgeText: function (text) {
                    var badge = $('#' + this.badgeId),
                            displayBadge = true;

                    if (text) {
                        badge.html(text);
                        badge.show();
                    } else {
                        badge.hide();
                    }
                }
            };

            $(tabbarId + ' ul').append(
                    $('<li>').css('width', buttonWidth + '%').append(
                        $('<a>').attr('id', buttons[i].linkId).append(
                            $('<small>').attr({
                                id: buttons[i].badgeId,
                                'class': 'badge right',
                                style: 'display: none;'
                            })).append(
                            $('<strong>').append(buttons[i].title)).append(
                            $('<div>').attr('class', buttons[i].btnClass)
                        )));
        });

        $(tabbarId + ' ul li a').each(function (i) {
            $(this).on('click', function () {
                var button = buttons[i];

                function executeTapEvent() {
                    if (visible && !button.isDisabled) {
                        output.log(button.title + ' was tapped');
                        button.toggleHighlighted();
                        eventManager.raiseEvent(button.eventHandler,button);
                    }
                }

                if (button.preventDoubleTap) {
                    if (!button.isPreventingTap) {
                        button.isPreventingTap = true;
                        setTimeout(function () {
                            button.isPreventingTap = false;
                        }, doubleTapSpeed);
                        executeTapEvent();
                    } else {
                        return false;
                    }
                } else {
                    executeTapEvent();
                }

            });
        });

        if (!visible) {
            $(tabbarId).css({ opacity: 0 });
        } else {
            $(tabbarId).css({ opacity: 1 });
        }
    }

    tabbar.create = create;
    tabbar.hide = hide;
    tabbar.show = show;
    tabbar.buttons = buttons;
    tabbar.getButton = getButton;

    return tabbar;
});

