const { DataTypes } = require('sequelize');
const sequelize = require('../config');

const Produtos = sequelize.define('Produtos', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  nome: {
    type: DataTypes.CHAR[30],
    allowNull: false,
  },
  valor: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  descricao: {
    type: DataTypes.CHAR[250],
    allowNull: false,
  },
});

module.exports = Produtos;
