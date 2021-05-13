const { Router } = require('express');
// const products = require('../data/products');
const tasksController = require('../controllers/tasksController')();

function tasksRouter() {
  const routes = Router();

  routes
    .route('/')
    .post(tasksController.addTask)
    .get(tasksController.getTasks);

  // routes
  //   .route('/:productId/')
  //   .put(productsController.addOneToStock)
  //   .delete(productsController.removeOneFromStock);
  // // .get(productsController.getById);

  return routes;
}

module.exports = tasksRouter();
