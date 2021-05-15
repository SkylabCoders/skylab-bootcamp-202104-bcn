const { Router } = require('express');
const productsController = require('../controllers/productsController')();

function productsRouter() {
  const routes = Router();

  routes
    .route('/')
    .get(productsController.getAllProducts)
    .post(productsController.createOne);

  routes
    .route('/:productId')
    .put(productsController.updateById);

  return routes;
}

module.exports = productsRouter();
