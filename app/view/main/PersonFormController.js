Ext.define('crudfront.view.main.PersonFormController',{
    extend: 'Ext.app.ViewController',
    alias: 'controller.personForm',
    
    onSaveClick:function(b){
        let me=this;
        let view=me.getView();
        let from=view.down('form');
        let values=from.getValues();
        console.log(values);
        try{
            if(!from.isValid()){
                Ext.toast('Por favor verifica tu informacion');
                return;
            }
            let client=new crudfront.view.PersonClient();
            let url= target.personasApi.insert;
            if(view.getMode()==='update'){
                url=target.personasApi.insert+'/'+values.id;
            }
            client.post({
                url:url,
                body:values,
                success:function(){
                    if(view.getMode()==='insert'){
                        Ext.toast('Person inserted');
                    }else{
                        Ext.toast('Person updated');
                    }
                    view.fireEvent(view.getMode()+'Event',view);
                    view.close();
                }
            })
        }catch(e){
            alert(e);
        }
    }
});