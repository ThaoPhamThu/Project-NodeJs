const express = require('express');
const { getUsersAPI, postUserAPI, putUserAPI, deleteUserAPI, postUploadSingleFileAPI, postUploadMultipleFilesAPI } = require('../controllers/apiController');
const { postCustomerAPI, postArrCustomersAPI, getCustomersAPI, putCustomerAPI, deleteCustomerAPI, deleteArrCustomersAPI } = require('../controllers/customerController');
const { postProjectAPI, getProjectAPI, putProjectAPI, deleteProjectAPI } = require('../controllers/projectController')
const routerAPI = express.Router();


routerAPI.get('/', (req, res) => {
    return res.send('API')
});

routerAPI.get('/users', getUsersAPI);
routerAPI.post('/users', postUserAPI);
routerAPI.put('/users', putUserAPI);
routerAPI.delete('/users', deleteUserAPI);

routerAPI.post('/file', postUploadSingleFileAPI);
routerAPI.post('/files', postUploadMultipleFilesAPI);

routerAPI.post('/customers', postCustomerAPI);
routerAPI.post('/customers-many', postArrCustomersAPI);
routerAPI.get('/customers', getCustomersAPI);
routerAPI.put('/customers', putCustomerAPI);
routerAPI.delete('/customers', deleteCustomerAPI);
routerAPI.delete('/customers-many', deleteArrCustomersAPI);

routerAPI.post('/projects', postProjectAPI);
routerAPI.get('/projects', getProjectAPI);
routerAPI.put('/projects', putProjectAPI);
routerAPI.delete('/projects', deleteProjectAPI);



module.exports = routerAPI;
