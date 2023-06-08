const express = require('express');
const { getUsersAPI } = require('../controllers/apiController');
const routerAPI = express.Router();


routerAPI.get('/', (req, res) => {
    return res.send('API')
});

routerAPI.get('/users', getUsersAPI);

module.exports = routerAPI;
