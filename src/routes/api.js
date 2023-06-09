const express = require('express');
const { getUsersAPI, postUserAPI, putUserAPI, deleteUserAPI, postUploadSingleFileAPI, postUploadMultipleFilesAPI } = require('../controllers/apiController');
const { postCustomerAPI, postArrCustomersAPI } = require('../controllers/customerController')
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


module.exports = routerAPI;
