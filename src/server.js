const express = require('express');
const configViewEngine = require('./config/viewEngine');
const webRoutes = require('./routes/web');
const connection = require('./config/database');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 8080;

//config req.body
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//Config template engine
configViewEngine(app);

//Khai bao route
app.use('/', webRoutes);

app.listen(port, () => {
    console.log(`On port ${port}`);
});
