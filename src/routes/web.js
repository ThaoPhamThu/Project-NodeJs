const express = require('express');
const { getHomePage, getTest, postCreateUser } = require('../controllers/homeController')
const router = express.Router();

router.get('/', getHomePage);
router.get('/test', getTest);
router.post('/create-user', postCreateUser)

module.exports = router;
