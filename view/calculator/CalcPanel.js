var calculator = new Calculator()

var updateDisplay = function(text) {
    var display = Ext.getCmp('display');
    display.setValue(text);

}


var numberHandler = function(button) {
    updateDisplay(calculator.number(button.text));
}

var operationHandler = function(button) {
    updateDisplay(calculator.operation(button.text))
}

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
            readOnly: true,
            value: "0",
            id: "display"
        });

        var upContainer = {
            xtype: 'fieldcontainer',
            defaults: {
                xtype: 'button',
                margin: 6,
                height: 40,
                width: 40,
                handler: numberHandler

            }, items: [{
                text: '7'
            }, {
                text: '8'
            }, {
                text: '9'
            }, {
                text: '/',
                handler: operationHandler
            }, {
                text: 'ce',
                handler: function(){
                    console.log(calculator);
                    updateDisplay(calculator.clear())
                }
            }, {
                text: '4'
            }, {
                text: '5'
            }, {
                text: '6'
            }, {
                text: '*',
                handler: operationHandler
            }, {
                text: '<-',
                handler: function() {
                    updateDisplay(calculator.back())
                }
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
                    handler: numberHandler
                },
                items: [{
                    text: '1'
                }, {
                    text: '2'
                }, {
                    text: '3'
                }, {
                    text: '-',
                    handler: operationHandler
                }, {
                    xtype: 'splitter'
                }, {
                    width: 92,
                    text: '0'
                }, {
                    text: '.',
                    handler: function(){
                        updateDisplay(calculator.dot())
                    }
                }, {
                    text: '+',
                    handler: operationHandler
                }]
            }, {
                xtype: 'button',
                height: 95,
                width: 40,
                text: '=',
                margin: '5 5 5 5',
                handler: function(){
                    updateDisplay(calculator.equals())
                }
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