const { Router } = require('express');
const products = require('../data/products');
const productsController = require('../controllers/productsController')(products);

function productsRouter() {
  const routes = Router();

  routes
    .route('/')
    .get(productsController.getAll);

  routes
    .route('/:productId')
    .get(productsController.getById);

  return routes;
}

module.exports = productsRouter();
