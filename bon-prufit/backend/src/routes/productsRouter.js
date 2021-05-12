const { Router } = require('express');
// const heroes = require('../heroes');
const productsController = require('../controllers/productsController')();

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
