const { Router } = require('express');
const carts = require('../data/carts');
const cartsController = require('../controllers/cartsController')(carts);

function cartsRouter() {
  const routes = Router();

  routes
    .route('/')
    .get(cartsController.getAll)
    .put(cartsController.update);

  return routes;
}

module.exports = cartsRouter();
