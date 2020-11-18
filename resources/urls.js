let _targetFrontBase    = '';
let _targetServicesBase = 'http://localhost:8080';

let _targetApi = {
    personas: _targetServicesBase + '/personas'
};

let target={
    personasApi:{
        getAll: _targetApi.personas + '/findAll',
        insert: _targetApi.personas + '/insert',
        delete: _targetApi.personas + '/delete',
        update: _targetApi.personas + '/update'
    }
};