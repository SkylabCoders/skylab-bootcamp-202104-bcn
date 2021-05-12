const { Router } = require('express');
const products = require('../products');
const productsController = require('../controllers/productsControllers')(products);

function productsRouter() {
  const routes = Router();

  routes
    .route('/')
    .get(productsController.getAll)

  return routes;
}

module.exports = productsRouter();
