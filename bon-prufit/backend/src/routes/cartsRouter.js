const { Router } = require('express');
// const heroes = require('../heroes');
const cartsController = require('../controllers/cartsController')();

function cartsRouter() {
  const routes = Router();

  routes
    .route('/')
    .get(cartsController.getAll)
    .post(cartsController.createOne);

  routes
    .route('/:cartId')
    .get(cartsController.getById)
    .delete(cartsController.deleteById);

  return routes;
}

module.exports = cartsRouter();
