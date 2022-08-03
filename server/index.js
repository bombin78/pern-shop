require('dotenv').config();
const express = require('express');
const sequelize = require('./db');

const PORT = process.env.PORT || 5000;

const app = express();

const start = async () => {
    try {
        // Вызов функции для подключения к БД
        await sequelize.authenticate()
        // Функция сверки состояния БД со схемой данных
        await sequelize.sync()
        app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
    } catch (e) {
        console.log(e);
    }
};

start();
