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
    },

    onRowEditClick: function(grid, a, b, c, d, record){
        let me = this;
        let view = me.getView();
        let form=Ext.create({
            xtype: 'personform',
            mode: 'update',
            listeners:{
                updateEvent: function(){
                    view.getStore().reload();
                }
            }
        });
        form.show();
        form.down('form').loadRecord(record);
        console.log(record.data);
    },
    onRowDeleteClick: function(grid, a, b, c, d, record){
        let me = this;
        let view = me.getView();
        if(confirm('Your record will be deleted, continue?')){
            let client = new crudfront.view.PersonClient();
            client.get({
                url:target.personasApi.delete+'/'+record.get('id'),
                success: function(){
                    Ext.toast('Book deleted');
                    view.getStore().reload();
                }
            });
        }
    }
});