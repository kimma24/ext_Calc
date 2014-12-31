    var btn=function(button, event){
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




    initComponent: function() {
        var me = this;
        me.buildItems();
        me.callParent();
    },

    buildItems: function(){
        var me = this;
        var items = [];


        items.push({
            height: 40,
          xtype: 'textfield',
          readOnly: true
        });




        items.push({
            flex: 1,

            defaults: {
                xtype:  'button',
                margin: 6,
                height: 40,
                width: 40,
                handler: btn
            },
            items:[{
                text: '7'
            },{
                text: '8'
            },{
                text: '9'
            },{
                text: '/'
            },{
                text: 'ce'
            },{
                text: '4'
            },{
                text: '5'
            },{
                text: '6'
            },{
                text: '*'
            },{
                text: '<-'
            },{
               xtype: 'container',
               layout: 'hbox',
               items:[{
                   xtype: 'fieldcontainer',
                   items:
                    [ {
                       text: '1'
                    },{
                        text: '2'
                    },{
                        text: '3'
                    },{
                        text: '+'
                    },{
                        text: '0',
                        width: 92
                    },{
                        text: '.'
                    },{
                        text: '-'
                    }]},
                   {
                        text: '=',
                        height: 92
                    }]
               }]

        });





        me.items = items;
    }



});