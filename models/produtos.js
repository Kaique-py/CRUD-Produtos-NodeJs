const { DataTypes } = require('sequelize');
const sequelize = require('../config');

const Produto = sequelize.define('Produto', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
  nome: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  valor: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
  descricao: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

module.exports = Produto;
