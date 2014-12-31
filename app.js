
Ext.require([
      //'view.Viewport'
    'view.calculator.calcWind'
]);
Ext.application({

    name: 'Calculator',
    appFolder:'view',
    launch: function () {

        //Ext.create('view.Viewport');

        Ext.create('view.calculator.calcWind')

    }

});