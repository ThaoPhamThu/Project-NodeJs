const mysql = require('mysql2');
require('dotenv').config();

//Test connection
// create the connection to database
const connection = mysql.createConnection({
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,   //default: 3036
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,  //default: emty
    database: process.env.DB_NAME
});

module.exports = connection;