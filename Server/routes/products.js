const express = require('express');
const productRouter = express.Router();

const products = require('../db/product.json');

productRouter.get('/', (req, res) => {
  res.json(products);
});

productRouter.get('/:id', (req, res) => {
  const { params } = req;
  const { id } = params ?? {};

  const product = products.filter((item) => +item.id === +id);

  if (product.length === 0) {
    return res.json(null);
  }

  res.json(product[0]);
});

module.exports = productRouter;
