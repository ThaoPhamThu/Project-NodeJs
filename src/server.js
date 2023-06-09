const express = require('express');
const configViewEngine = require('./config/viewEngine');
const webRoutes = require('./routes/web');
const apiRoutes = require('./routes/api')
const connection = require('./config/database');
const fileUpload = require('express-fileupload');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 8080;

//config req.body
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//Config template engine
configViewEngine(app);

//congig file upload
app.use(fileUpload());

//Khai bao route
app.use('/', webRoutes);
app.use('/v1/api', apiRoutes);

(async () => {
    // test connection
    await connection();
    app.listen(port, () => {
        console.log(`On port ${port}`);
    });
})();

