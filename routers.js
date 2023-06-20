const express = require('express');
const { Produto } = require('./models/produtos');

const router = express.Router();

// Criar produto
router.post('/', async (req, res) => {
  try {
    const { nome, valor, descricao } = req.body;
    const produto = await Produto.create({ nome, valor, descricao });
    return res.status(201).json(produto);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Erro ao criar o produto.' });
  }
});

// Obter todos os produtos
router.get('/', async (req, res) => {
  try {
    const produto = await Produto.findAll();
    return res.json(produto);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Erro ao obter os produtos.' });
  }
});

// Obter um produto específico
router.get('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const produto = await Produto.findByPk(id);
    if (!produto) {
      return res.status(404).json({ message: 'Produto não encontrado.' });
    }
    return res.json(produto);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Erro ao obter o produto.' });
  }
});

// Atualizar um produto existente
router.put('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const { nome, valor, descricao } = req.body;
    const produto = await Produto.findByPk(id);
    if (!produto) {
      return res.status(404).json({ message: 'Produto não encontrado.' });
    }
    produto.nome = nome;
    produto.valor = valor;
    produto.descricao = descricao;
    await produto.save();
    return res.json(produto);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Erro ao atualizar o produto.' });
  }
});

// Deletar um produto
router.delete('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const produto = await Produto.findByPk(id);
    if (!produto) {
      return res.status(404).json({ message: 'Produto não encontrado.' });
    }
    await produto.destroy();
    return res.json({ message: 'Produto excluído com sucesso.' });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Erro ao deletar o produto.' });
  }
});

module.exports = router;
