const { Sequelize } = require('sequelize')

module.exports = new Sequelize(
    'web#1',
    'postgres',
    'root',
    {
        dialect: 'postgres',
        host: 'localhost',
        port: '5432'
    }
)