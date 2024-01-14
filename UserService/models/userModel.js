const {Sequelize, DataTypes} = require('sequelize');
const { sequelize, user } = require('../config/sequelizeConfig');

const userdb = sequelize.define('userdb', {
    userid: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },
    username: {
        type: DataTypes.STRING,
        allowNull: false,
        unique:true
    }, 
    password: {
        type: DataTypes.STRING,
        allowNull: false,
    }
}, {
    tableName: 'users'
});

module.exports = userdb;