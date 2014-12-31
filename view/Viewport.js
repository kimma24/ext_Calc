Ext.define('view.Viewport',{
    extend: 'Ext.container.Viewport',
    alias: 'widget.viewport',
    //Calculator/view/calculator/CalcPanel.js
    requires: ['view.calculator.CalcPanel'],

    initComponent: function() {
        var me = this;
        me.buildItems();
        me.callParent();
    },

    buildItems: function() {
        var me = this;
        var items = [];

        items.push({
            xtype: 'calcpanel'
        });

        me.items = items;
    }

});