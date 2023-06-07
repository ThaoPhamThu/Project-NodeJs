const express = require('express');
const { getHomePage, getTest, postCreateUser, getCreateUser, getUpdateUser, postUpdateUser, postDeleteUser, postHandleDeleteUser } = require('../controllers/homeController')
const router = express.Router();

router.get('/', getHomePage);
router.get('/test', getTest);

router.get('/form-create-user', getCreateUser);
router.get('/update-user/:userId', getUpdateUser);

router.post('/create-user', postCreateUser);

router.post('/update-user/:userId', postUpdateUser);

router.post('/delete-user/:userId', postDeleteUser);
router.post('/delete-user/', postHandleDeleteUser);

module.exports = router;
