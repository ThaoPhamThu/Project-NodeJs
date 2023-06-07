const { getAllUsers, postNewUser } = require('../services/CRUDService');
const connection = require('../config/database');

const getHomePage = async (req, res) => {
    let results = await getAllUsers();
    return res.render('home.ejs', { listUsers: results });
};

const getTest = (req, res) => {
    return res.render('sample.ejs');
};

const postCreateUser = async (req, res) => {
    let email = req.body.email;
    let name = req.body.name;
    let city = req.body.city;

    let [results, fields] = await connection.query(
        ` INSERT INTO Users(email, name, city) VALUES(?,?,?) `, [email, name, city]);

    return res.redirect('/');
};

const getCreateUser = (req, res) => {
    return res.render('createUser.ejs');
}

module.exports = {
    getHomePage,
    getTest,
    postCreateUser,
    getCreateUser
}