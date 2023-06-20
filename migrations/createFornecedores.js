const { DataTypes } = require('sequelize');

'use strict';

//Teste de criação de uma nova tabela, para ver se a conexão com o banco de dados, aqui pelo VsCode está funcionando.
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Fornecedores', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      nome: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      email: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
      },
      createdAt: {
        type: Sequelize.DATE,
        allowNull: false,
      },
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Fornecedores');
  },
};
