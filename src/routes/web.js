const express = require('express');
const { getHomePage, getTest, postCreateUser, getCreateUser } = require('../controllers/homeController')
const router = express.Router();

router.get('/', getHomePage);
router.get('/test', getTest);
router.post('/create-user', postCreateUser);
router.get('/form-create-user', getCreateUser)

module.exports = router;
