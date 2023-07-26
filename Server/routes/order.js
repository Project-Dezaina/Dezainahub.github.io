const express = require('express');
const orderRouter = express.Router();
const fs = require('fs');
const path = require('path');

const pathName = path.join(__dirname, '..', 'db', 'orders.json');

const getOrder = () =>
  JSON.parse(fs.readFileSync(pathName, { encoding: 'utf8' }));

const writeOrders = (orders) =>
  fs.writeFileSync(pathName, JSON.stringify(orders, null, 2), 'utf8');

orderRouter.get('/', (req, res) => {
  const orders = getOrder();

  res.json(orders);
});

orderRouter.post('/create', (req, res) => {
  /* 
    example of a body: 
    {
      "totalAmount":100,
      "products": {
        "1": 3,
        "2": 4,
        "productID": "quantity"
      }
    }
  */

  const { totalAmount = 0, products = {} } = req.body ?? {};

  const orders = getOrder();

  const newOrder = {
    date: new Date().toISOString(),
    totalAmount: totalAmount,
    id: orders.length + 1,
    products,
  };

  orders.push(newOrder);

  writeOrders(orders)

  res.json({ message: 'success' });
});

module.exports = orderRouter;
