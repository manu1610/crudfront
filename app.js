/*
 * This file launches the application by asking Ext JS to create
 * and launch() the Application class.
 */
Ext.application({
    extend: 'crudfront.Application',

    name: 'crudfront',

    requires: [
        // This will automatically load all classes in the crudfront namespace
        // so that application classes do not need to require each other.
        'crudfront.*'
    ],

    // The name of the initial view to create.
    mainView: 'crudfront.view.main.Main'
});
