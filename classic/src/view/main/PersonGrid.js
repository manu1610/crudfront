Ext.define('crudfront.view.main.PersonGrid',{
    extend: 'Ext.grid.Panel',
    xtype: 'persongrid',

    title: 'Person Grid',

    store:{
        autoLoad
    }
})