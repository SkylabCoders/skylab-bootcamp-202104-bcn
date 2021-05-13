const { Router } = require('express');
const tasksController = require('../controllers/tasksController')();

function productsRouter() {
  const routes = Router();

  routes
    .route('/')
    .get(tasksController.getAll)
    .post(tasksController.addTask);

  routes
    .route('/:taskId/')
    .put(tasksController.updateTask)
    .delete(tasksController.deleteTask);

  return routes;
}

module.exports = productsRouter();
