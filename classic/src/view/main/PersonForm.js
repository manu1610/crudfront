Ext.define('crudfront.view.main.PersonForm',{
    extend: 'Ext.window.Window',
    xtype:'personform',
    controller: 'personForm',

    title:'Formulario de Personas',
    modal: true,
    scrollabal:true,
    config:{
        mode:null
    },
    constructor:function(config){
        config.maxHeigth=Ext.getBody().getHeight()-100;
        this.callParent(arguments);
    },
    items:[{
        xtype:'form',
        defaults:{
            xtype:'textfield',
            allowBlank:false,
            style:'margin: 5px'
        },
        items:[
            {
            fieldLabel: 'ID',
            name: 'id'
            },{
            fieldLabel:'Name',
            name:'name'
        }, {
            fieldLabel:'Apellido Paterno',
            name:'paternalSurname'
        },{
            fieldLabel:'Apellido Materno',
            name:'maternalSurname'
        },{
            fieldLabel:'Fecha de nacimiento',
            xtype: 'datefield',
            format: 'Y-m-d',
            name: 'birthdate'
        },{
            fieldLabel:'Genero',
            name:'gender'
        }]
    }],
    buttons:[{
            text:'save',
            inconCls:'x-fa fa-save',
            handler:'onSaveClick'
        }]
    
});