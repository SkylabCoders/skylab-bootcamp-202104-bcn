const { Router } = require('express');
const tasksController = require('../controller/tasksController')();

function tasksRouter() {
  const routes = Router();

  routes
    .route('/')
    .get(tasksController.getAllTasks)
    .post(tasksController.createOne);

  routes
    .route('/:productId')
    .put(tasksController.updateTask)
    .delete(tasksController.deleteTask);

  return routes;
}

module.exports = tasksRouter();
