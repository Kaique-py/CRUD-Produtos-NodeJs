const { Sequelize } = require('sequelize');
const sequelize = new Sequelize('produtos', 'postgres', 'kaique', {
    host: 'localhost',
    port: 5432,
    dialect: 'postgres',
  });
  
  module.exports = sequelize;