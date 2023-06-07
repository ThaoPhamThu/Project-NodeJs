const connection = require('../config/database');

const getAllUsers = async () => {
    let [results, fields] = await connection.query(
        `select * from Users`
    )
    return results;
}

const postNewUser = async (email, name, city) => {
    let [results, fields] = await connection.query(
        ` INSERT INTO Users(email, name, city) VALUES(?,?,?) `, [email, name, city]);

}

const getUserById = async (id) => {
    let [results, fields] = await connection.query(
        `select * from Users where id= ?`,
        [id]
    );

    let user = results && results.length > 0 ? results[0] : {};
    return user;
}

const updateUserById = async (email, name, city, id) => {
    let [results, fields] = await connection.query(
        `UPDATE Users SET email =?, name =?, city =? WHERE id=?`,
        [email, name, city, id]
    );
}

const deleteUserById = async (id) => {
    let [results, fields] = await connection.query(
        `delete from Users where id = ?`,
        [id]
    );
}
module.exports = {
    getAllUsers,
    postNewUser,
    getUserById,
    updateUserById,
    deleteUserById
}