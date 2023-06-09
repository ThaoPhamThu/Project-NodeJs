const connection = require('../config/database');
const User = require('../models/user');
const { use } = require('../routes/web');
const { uploadSingleFile, uploadMultiFiles } = require('../services/filesService');

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

const postUploadSingleFileAPI = async (req, res) => {
    if (!req.files || Object.keys(req.files).length === 0) {
        console.log(req.files)
        return res.status(400).send('No files were uploades.');
    };

    let result = await uploadSingleFile(req.files.image);
    return res.status(200).json({
        errCode: 0,
        data: result
    })
}

const postUploadMultipleFilesAPI = async (req, res) => {
    if (!req.files || Object.keys(req.files).length === 0) {
        console.log(req.files)
        return res.status(400).send('No files were uploades.');
    };
    //upload single => file is an Object
    //upload multiple => files ias an array
    if (Array.isArray(req.files.image)) {
        let results = await uploadMultiFiles(req.files.image);
        return res.status(200).json({
            errCode: 0,
            data: results
        })
    } else {
        return postUploadSingleFileAPI(req, res);
    };

}
module.exports = {
    getUsersAPI,
    postUserAPI,
    putUserAPI,
    deleteUserAPI,
    postUploadSingleFileAPI,
    postUploadMultipleFilesAPI
}