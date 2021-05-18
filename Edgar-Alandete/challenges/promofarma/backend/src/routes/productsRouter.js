
const { Router } = require('express');
const productsController = require('../controllers/productsControllers')();

function productsRouter() {
  const routes = Router();

  routes
    .route('/')
    .get(productsController.getAll)
    .post(productsController.createOne);

  routes
    .route('/:productId')
    .get(productsController.getById)
    .put(productsController.updateById)
    .delete(productsController.deleteById);

  return routes;
}

module.exports = productsRouter();
