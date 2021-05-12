const { Router } = require('express');
const carts = require('../data/carts');
const cartsController = require('../controllers/cartsController')(carts);

function cartsRouter() {
  const routes = Router();

  routes
    .route('/')
    .get(cartsController.getAll);

  routes
    .route('/:cartId')
    .get(cartsController.getById)
    .delete(cartsController.deleteById);

  return routes;
}

module.exports = cartsRouter();
