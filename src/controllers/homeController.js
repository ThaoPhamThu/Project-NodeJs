const connection = require('../config/database');

const getHomePage = (req, res) => {
    let users = [];
    connection.query(
        'select * from Users',
        function (err, results, fields) {
            users = results;
            return res.send(JSON.stringify(users));
        }
    );

};

const getTest = (req, res) => {
    return res.render('sample.ejs');
};

module.exports = {
    getHomePage,
    getTest,
}