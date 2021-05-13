const { Router } = require('express');
const tasksController = require('../controllers/tasksController')();

function productsRouter() {
  const routes = Router();

  routes
    .route('/')
    .get(tasksController.getAll);

  routes
    .route('/:taskId/')
    .get(tasksController.getTaskById)
    .delete(tasksController.deleteTaskById)
    .post(tasksController.addTask);
  //   .put(tasksController.addOneToStock)

  return routes;
}

module.exports = productsRouter();
