const express = require('express');
const { getUsersAPI, postUserAPI, putUserAPI, deleteUserAPI } = require('../controllers/apiController');
const routerAPI = express.Router();


routerAPI.get('/', (req, res) => {
    return res.send('API')
});

routerAPI.get('/users', getUsersAPI);

routerAPI.post('/users', postUserAPI);

routerAPI.put('/users', putUserAPI);

routerAPI.delete('/users', deleteUserAPI);

module.exports = routerAPI;
