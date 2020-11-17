Ext.define('crudfront.view.main.PersonController', {
    extend: 'Ext.app.ViewController',

    alias: 'controller.person',

    onAddClick: function(b){
        let me = this;
        let view =me.getView();
        let form = Ext.create({
            xtype:'personform',
            mode:'insert',
            listeners:{
                insertEvent: function(){
                    view.getStore().reload();
                }
            }
        });
        form.show();
    }

});