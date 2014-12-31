var btn = function (button, event) {
    alert(button.text)
};

Ext.define('view.calculator.CalcPanel', {
    extend: 'Ext.form.Panel',

    closable: false,
    alias: 'widget.calcpanel',
    width: 500,
    layout: {
        type: 'vbox',
        align: 'stretch'
    },


    initComponent: function () {
        var me = this;
        me.buildItems();
        me.callParent();
    },

    buildItems: function () {
        var me = this;
        var items = [];


        items.push({
            height: 40,
            xtype: 'textfield',
            readOnly: true
        });

        var upContainer = {
            xtype: 'fieldcontainer',
            defaults: {
                xtype: 'button',
                margin: 6,
                height: 40,
                width: 40,
                handler: btn
            }, items: [{
                text: '7'
            }, {
                text: '8'
            }, {
                text: '9'
            }, {
                text: '/'
            }, {
                text: 'ce'
            }, {
                text: '4'
            }, {
                text: '5'
            }, {
                text: '6'
            }, {
                text: '*'
            }, {
                text: '<-'
            }]
        };

        var downContainer = {
            xtype: 'container',
            layout: 'hbox',
            items: [{
                xtype: 'fieldcontainer',
                defaults: {
                    xtype: 'button',
                    margin: 6,
                    height: 40,
                    width: 40,
                    handler: btn
                },
                items: [{
                    text: '1'
                }, {
                    text: '2'
                }, {
                    text: '3'
                }, {
                    text: '-'
                }, {
                    xtype: 'splitter'
                }, {
                    width: 92,
                    text: '0'
                }, {
                    text: '.'
                }, {
                    text: '+'
                }]
            }, {
                xtype: 'button',
                height: 95,
                width: 40,
                text: '=',
                margin: '5 5 5 5'
            }]
        };

        items.push({
            flex: 1,
            xtype: 'container',
            items: [upContainer, downContainer]
        });


        me.items = items;
    }


});