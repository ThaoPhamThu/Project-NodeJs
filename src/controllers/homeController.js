const connection = require('../config/database');

const getHomePage = (req, res) => {
    return res.render('home.ejs')
};

const getTest = (req, res) => {
    return res.render('sample.ejs');
};

const postCreateUser = (req, res) => {
    let email = req.body.email;
    let name = req.body.name;
    let city = req.body.city;

    connection.query(
        ` INSERT INTO Users(email, name, city) VALUES(?,?,?) `,
        [email, name, city],
        (err, results) => {
            console.log(results);
            return res.send('Heloooo');
        }
    )
};

module.exports = {
    getHomePage,
    getTest,
    postCreateUser,
}