const { Router } = require('express');
const tasksController = require('../controllers/tasksController')();

function productsRouter() {
  const routes = Router();

  routes
    .route('/')
    .get(tasksController.getAll);

  routes
    .route('/:taskId/')
    .get(tasksController.getTaskById);
  //   .put(tasksController.addOneToStock)
  //   .delete(tasksController.removeOneFromStock);

  return routes;
}

module.exports = productsRouter();
