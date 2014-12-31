var calculator = {
    answer: 0,
    currentNumber: 0,
    currentOperation: undefined,
    number: function(number) {

    },
    operatoin: function(operation) {

    }
};

Ext.onReady(function () {
    Ext.create('Ext.panel.Panel', {
        renderTo: Ext.getBody(),
        title: 'Calculator',
        defoults: {

        },
        height: 500,
        items: [{
            xtype: 'textfield',
            name: 'name',
            value: '0',
            readOnly: true,
            margin: '5 5 5 5',
            width: 267,
            height: 50,
            fieldStyle: 'text-align: right; font-size: 20px;'
        }, {
            xtype: 'fieldset',
            items: [{
                xtype: 'fieldcontainer',
                items: [{
                    xtype: 'button',
                    height: 40,
                    width: 40,
                    text: '7',
                    margins: 5,
                    handler: function() {
                        calculator.number(this.text);
                    }
                }, {
                    xtype: 'button',
                    height: 40,
                    width: 40,
                    text: '8',
                    margin: '5 5 5 5'
                }, {
                    xtype: 'button',
                    height: 40,
                    width: 40,
                    text: '9',
                    margin: '5 5 5 5'
                }, {
                    xtype: 'button',
                    height: 40,
                    width: 40,
                    text: '/',
                    margin: '5 5 5 5'
                }, {
                    xtype: 'button',
                    height: 40,
                    width: 40,
                    text: '<-',
                    margin: '5 5 5 5'
                }, {
                    xtype: 'splitter'
                }, {
                    xtype: 'button',
                    height: 40,
                    width: 40,
                    text: '4',
                    margin: '5 5 5 5'
                }, {
                    xtype: 'button',
                    height: 40,
                    width: 40,
                    text: '5',
                    margin: '5 5 5 5'
                }, {
                    xtype: 'button',
                    height: 40,
                    width: 40,
                    text: '6',
                    margin: '5 5 5 5'
                }, {
                    xtype: 'button',
                    height: 40,
                    width: 40,
                    text: '*',
                    margin: '5 5 5 5'
                }, {
                    xtype: 'button',
                    height: 40,
                    width: 40,
                    text: 'ce',
                    margin: '5 5 5 5'
                }]
            }, {
                xtype: 'container',
                layout: 'hbox',
                items: [{
                    xtype: 'fieldcontainer',
                    items: [{
                        xtype: 'button',
                        height: 40,
                        width: 40,
                        text: '1',
                        margin: '5 5 5 5'
                    }, {
                        xtype: 'button',
                        height: 40,
                        width: 40,
                        text: '2',
                        margin: '5 5 5 5'
                    }, {
                        xtype: 'button',
                        height: 40,
                        width: 40,
                        text: '3',
                        margin: '5 5 5 5'
                    }, {
                        xtype: 'button',
                        height: 40,
                        width: 40,
                        text: '-',
                        margin: '5 5 5 5'
                    }, {
                        xtype: 'splitter'
                    }, {
                        xtype: 'button',
                        height: 40,
                        width: 90,
                        text: '0',
                        margin: '5 5 5 5'
                    }, {
                        xtype: 'button',
                        height: 40,
                        width: 40,
                        text: '.',
                        margin: '5 5 5 5'
                    }, {
                        xtype: 'button',
                        height: 40,
                        width: 40,
                        text: '+',
                        margin: '5 5 5 5'
                    }]
                }, {
                    xtype: 'button',
                    height: 95,
                    width: 40,
                    text: '=',
                    margin: '5 5 5 5'
                }]
            }]
        }]
    })
});