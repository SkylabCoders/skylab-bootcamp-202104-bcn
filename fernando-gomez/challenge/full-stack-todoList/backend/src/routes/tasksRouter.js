const { Router } = require('express');
const tasksController = require('../controllers/tasksController')();

function tasksRouter() {
  const routes = Router();

  routes
    .route('/')
    .get(tasksController.getAll)
    .post(tasksController.addTask);

  routes
    .route('/:taskId/')
    .put(tasksController.updateTaskById)
    .delete(tasksController.deleteTaskById);

  return routes;
}

module.exports = tasksRouter();
