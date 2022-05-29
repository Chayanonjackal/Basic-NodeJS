const Sequelize = require('Sequelize');
const db = require('../Database/db');

module.exports = db.sequelize.define(
    'users',
    {
        id:{
            type : Sequelize.INTEGER,
            primaryKey:true,
            autoIncrement: true
        },
        name:{
            type : Sequelize.STRING,
        },
        age:{
            type : Sequelize.INTEGER,
        },
    },{
        timestamps: false,
        freezeTableName:true,
        tableName:'users'
    }
);