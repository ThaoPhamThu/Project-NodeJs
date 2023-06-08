const connection = require('../config/database');
const User = require('../models/user');
const { use } = require('../routes/web');

const getUsersAPI = async (req, res) => {
    let results = await User.find({});
    return res.status(200).json({
        errCode: 0,
        data: results
    })
};

const postUserAPI = async (req, res) => {
    let email = req.body.email;
    let name = req.body.name;
    let city = req.body.city;
    let user = await User.create({
        email: email,
        name: name,
        city: city
    });
    return res.status(200).json({
        errCode: 0,
        data: user
    })
}

const putUserAPI = async (req, res) => {
    let email = req.body.email;
    let name = req.body.name;
    let city = req.body.city;
    let id = req.body.id;
    let user = await User.updateOne({ _id: id }, { email: email, name: name, city: city });
    return res.status(200).json({
        errCode: 0,
        data: user
    });
}

const deleteUserAPI = async (req, res) => {
    let id = req.body.id;
    let user = await User.deleteOne({ _id: id });
    return res.status(200).json({
        errCode: 0,
        data: user
    });
}
module.exports = {
    getUsersAPI,
    postUserAPI,
    putUserAPI,
    deleteUserAPI
}