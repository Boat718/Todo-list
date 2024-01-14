const {DataTypes} = require('sequelize');
const {sequelize} = require('../config/sequelizeConfig');

const taskdb = sequelize.define('taskdb', {
    taskid: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },
    userid: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    task: {
        type: DataTypes.STRING,
        allowNull: false,
    }, 
    status: {
        type: DataTypes.STRING,
        allowNull: false,
    }

}, {
    tableName: 'tasks'
})

module.exports = taskdb;