require('dotenv').config();
const express = require('express');
const sequelize = require('./db');
const models = require('./models/models');
const cors = require('cors');
const fileUpload = require('express-fileupload');
const router = require('./routes/index');
const errorHandler = require('./middleware/ErrorHandlingMiddleware');
const path = require('path');


const PORT = process.env.PORT || 5000;

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.static(path.resolve(__dirname, 'static')));
app.use(fileUpload({}));
app.use('/api', router);


// Обработка ошибок, последний Middleware
// Методов next в нем не возвращаем потому что он последний,
// на нем все заканчивается.
app.use(errorHandler);

const start = async () => {
    try {
        // Вызов функции для подключения к БД
        await sequelize.authenticate();
        // Функция сверки состояния БД со схемой данных
        await sequelize.sync();
        app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
    } catch (e) {
        console.log(e);
    }
};

start();
