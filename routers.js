const express = require('express');
const { Produto } = require('./models/produtos');

const router = express.Router();

router.get('/', async (req, res) => {
  const produtos = await Produto.findAll();
  res.json(produtos);
});

router.post('/', async (req, res) => {
  const { nome } = req.body;
  const produtos = await Produto.create({ nome });
  res.json(produtos);
});

module.exports = router;
