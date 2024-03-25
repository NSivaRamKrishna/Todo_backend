const pg = require('pg')
const Sequelize = require("sequelize");
const config = require("../config/config.json");

const sequelize = new Sequelize(config.url, {
  dialectModule: pg
});
sequelize
  .authenticate()
  .then(() => {
    console.log('Connected to PgAdmin');  
  })
  .catch((error) => {
    console.error('Failed to connect to PgAdmin:', error);
  });

module.exports = sequelize;