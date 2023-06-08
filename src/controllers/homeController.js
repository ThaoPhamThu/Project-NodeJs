const { getAllUsers, postNewUser, getUserById, updateUserById, deleteUserById } = require('../services/CRUDService');
const connection = require('../config/database');
const User = require('../models/user')

const getHomePage = async (req, res) => {
    let results = await User.find({});
    return res.render('home.ejs', { listUsers: results });
};

const getTest = (req, res) => {
    return res.render('sample.ejs');
};

const postCreateUser = async (req, res) => {
    let email = req.body.email;
    let name = req.body.name;
    let city = req.body.city;

    await User.create({
        email: email,
        name: name,
        city: city
    })

    return res.redirect('/');
};

const getCreateUser = (req, res) => {
    return res.render('createUser.ejs');
}

const getUpdateUser = async (req, res) => {
    const id = req.params.userId;
    const user = await User.findById(id).exec();
    return res.render('editUser.ejs', { user: user });
}

const postUpdateUser = async (req, res) => {
    let email = req.body.email;
    let name = req.body.name;
    let city = req.body.city;
    let id = req.params.userId;

    await User.updateOne({ _id: id }, { email: email, name: name, city: city });

    return res.redirect('/')
}

const postDeleteUser = async (req, res) => {
    const id = req.params.userId;
    const user = await User.findById(id).exec();;
    return res.render('delete.ejs', { user: user });
}

const postHandleDeleteUser = async (req, res) => {
    const id = req.body.id;
    await User.deleteOne({ _id: id });
    return res.redirect('/');
}
module.exports = {
    getHomePage,
    getTest,
    postCreateUser,
    getCreateUser,
    getUpdateUser,
    postUpdateUser,
    postDeleteUser,
    postHandleDeleteUser
}