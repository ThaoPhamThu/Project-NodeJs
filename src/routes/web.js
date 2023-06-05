const express = require('express');
const { getHomePage, getTest } = require('../controllers/homeController')
const router = express.Router();

router.get('/', getHomePage);
router.get('/test', getTest);

module.exports = router;
