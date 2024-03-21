const {DataTypes}=require('sequelize');
const pool = require('../database/database');
const User = require('./user');
const Task = pool.define('task',{
    id:{
        type:DataTypes.INTEGER,
        primaryKey  : true,
        autoIncrement:true
    },
    userid:{
        type:DataTypes.INTEGER,
        references:{
            model:User,
            key:'id'
        }
    },
    task:{
        type:DataTypes.STRING,
        allowNull:false
    }
},{
    tableName:'task',
    timestamps:false
})

module.exports=Task;