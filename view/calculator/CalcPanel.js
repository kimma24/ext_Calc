var calculator = new Calculator()


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
                handler: function(button){
                    calculator.number(button.text)
                }

            }, items: [{
                text: '7'
            }, {
                text: '8'
            }, {
                text: '9'
            }, {
                text: '/',
                handler: function(){
                    Ext.get("display").value=calculator.div()
                }
            }, {
                text: 'ce',
                handler: function(){
                    console.log(calculator);
                    Ext.get("display").value=calculator.clear()
                }
            }, {
                text: '4'
            }, {
                text: '5'
            }, {
                text: '6'
            }, {
                text: '*',
                handler: function(){
                    calculator.mult()
                }
            }, {
                text: '<-',
                handler: function(){
                    calculator.back()
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
                    handler: function(button){
                        calculator.number(button.text)
                    }
                },
                items: [{
                    text: '1'
                }, {
                    text: '2'
                }, {
                    text: '3'
                }, {
                    text: '-',
                    handler: function(){
                        calculator.min()
                    }
                }, {
                    xtype: 'splitter'
                }, {
                    width: 92,
                    text: '0'
                }, {
                    text: '.',
                    handler: function(){
                        calculator.dot()
                    }
                }, {
                    text: '+',
                    handler: function(){
                        calculator.add()
                    }
                }]
            }, {
                xtype: 'button',
                height: 95,
                width: 40,
                text: '=',
                margin: '5 5 5 5',
                handler: function(){
                    calculator.equals()
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