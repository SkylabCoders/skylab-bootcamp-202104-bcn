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
    .get(tasksController.getTaskById)
    .delete(tasksController.deleteTaskById)
    .put(tasksController.modifyTask);

  return routes;
}

module.exports = productsRouter();
