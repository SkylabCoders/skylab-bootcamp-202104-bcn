const { Router } = require('express');
const tasksController = require('../controllers/tasksController')();

function productsRouter() {
  const routes = Router();

  routes
    .route('/')
    .get(tasksController.getAll);

  // routes
  //   .route('/:taskId/')
  //   .put(tasksController.addOneToStock)
  //   .delete(tasksController.removeOneFromStock);
  // .get(tasksController.getById);

  return routes;
}

module.exports = productsRouter();
