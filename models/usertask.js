const {DataTypes} = require('sequelize');
const pool = require('../database/database');
const Task = require('./task');
const Usertask= pool.define('userTask',{
    id : {
        type : DataTypes.INTEGER,
        primaryKey : true,
        autoIncrement : true
    },
    taskid :{
        type:DataTypes.INTEGER,
        references:{
            model : Task,
            key:'id'
        }
    },
    content:{
        type:DataTypes.STRING,
        allowNull:false
    },
    created_at:{
        type:DataTypes.STRING,
        allowNull:false
    },
    completed_at:{
        type:DataTypes.STRING,
        allowNull:false
    },
    status:{
        type:DataTypes.STRING,
        allowNull:false
    }
},{
    tableName:'userTask',
    timestamps:false
});
module.exports=Usertask;