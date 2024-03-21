 const { DataTypes } = require('sequelize');
 const pool =require('../database/database');

 const User = pool.define('user',{
    id : {
        type : DataTypes.INTEGER,
        primaryKey : true,
        autoIncrement : true
    },
    username :{
        type : DataTypes.STRING,
        allowNull : false
    },
    password :{
        type : DataTypes.STRING,
        allowNull:false
    }
 },{
    tableName : 'user',
    timestamps : false
 })

 module.exports=User;