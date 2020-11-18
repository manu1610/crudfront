Ext.define('crudfront.view.main.PersonGrid',{
    extend: 'Ext.grid.Panel',
    xtype: 'persongrid',

    controller: 'person',

    title: 'Personas',

    store:{
        autoLoad: true,
        proxy:{
            type: 'ajax',
            url: target.personasApi.getAll,
            reader:{
                type:'json',
                rootProperty:'data'
            }
        }
    },

    tbar:[{
        text:'Add',
        iconCls:'x-fa fa-plus',
        handler:'onAddClick'
    }],
    columns:[{
        xtype:'actioncolumn',
        width:60,
        items:[{
            iconCls:'x-fa fa-edit',
            tooltip:'Edit',
            srtable:false,
            handler: 'onRowEditClick'
        },{
            iconCls:'x-fa fa-close',
            tooltip:'Delete',
            srtable:false,
            handler: 'onRowDeleteClick'
        }]
    }, 
    {
        text:'ID',
        Width:80,
        dataIndex:'id'
    },{
        text:'Name',
        flex:1,
        minWidth:100,
        dataIndex:'name'
    },{
        text:'Apellido Paterno',
        flex:1,
        minWidth:100,
        dataIndex:'paternalSurname'
    },{
        text:'Apellido Materno',
        flex:1,
        minWidth:100,
        dataIndex:'maternalSurname'
    },{
        xtype: 'datecolumn',
        text:'Fecha de  nacimiento',
        flex:1,
        minWidth:100,
        format: 'd-m-Y',
        dataIndex:'birthdate'
    },{
        text:'Genero',
        flex:1,
        minWidth:100,
        dataIndex:'gender'
    }]

})