const Sequelize = require("sequelize");
const config = require("../config/config.json");
const sequelize = new Sequelize(
	  config.database,
    config.username,
    config.password,
	config
);


sequelize
  .authenticate()
  .then(() => {
    console.log('Connected to PgAdmin');
  })
  .catch((error) => {
    console.error('Failed to connect to PgAdmin:', error);
  });

module.exports = sequelize;