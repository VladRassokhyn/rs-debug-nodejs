const Sequelize = require('sequelize');
const Op = Sequelize.Op;

const sequelize = new Sequelize(
    process.env.DB,
    process.env.DB_USER,
    process.env.DB_PASSWORD,
    {
        host: process.env.DB_HOST,
        port: process.env.DB_PORT,
        dialect: 'postgres',
        operatorsAliases: false
    })


module.exports = sequelize;