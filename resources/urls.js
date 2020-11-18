let _targetFrontBase    = '';
let _targetServicesBase = 'http://localhost:8080';

let _targetApi = {
    personas: _targetServicesBase + '/personas'
};

let target={
    personasApi:{
        getAll: _targetApi.personas + '/findAllActive',
        insert: _targetApi.personas + '/insert',
        update: _targetApi.personas + '/update',
        delete: _targetApi.personas + '/delete'
    }
};