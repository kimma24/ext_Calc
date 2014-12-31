Ext.define('view.calculator.calcWind', {
    extend: 'Ext.window.Window',
    autoShow: true,
    requires: ['view.calculator.CalcPanel'],

    title: 'gela',
    alias: 'widget.calcwind',
    width: 300,
    height: 350,
    layout: 'fit',
    resizable: false,

    initComponent: function() {
        var me = this;
        me.buildItems();
        me.callParent();
    },

    buildItems: function(){
        var me = this;
        var items = [];


        items.push({
            xtype: 'calcpanel'
        });

        me.items = items;
    }



});