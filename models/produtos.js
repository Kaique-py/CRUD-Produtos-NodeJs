const { DataTypes } = require('sequelize');
const sequelize = require('../config');

const Produtos = sequelize.define('Produtos', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
  nome: {
    type: DataTypes.CHAR,
    allowNull: false,
  },
  valor: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  descricao: {
    type: DataTypes.CHAR,
    allowNull: false,
  },
});

module.exports = Produtos;
