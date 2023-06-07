const connection = require('../config/database');

const getAllUsers = async () => {
    let [results, fields] = await connection.query(
        `select * from Users`
    )
    return results;
}

const postNewUser = async () => {
    // let email = req.body.email;
    // let name = req.body.name;
    // let city = req.body.city;

    // let [results, fields] = await connection.query(
    //     ` INSERT INTO Users(email, name, city) VALUES(?,?,?) `, [email, name, city]);

}

module.exports = {
    getAllUsers,
    postNewUser
}