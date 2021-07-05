const { Router } = require('express');
const tasksController = require('../controllers/tasksController')();

function tasksRouter() {
  const routes = Router();

  routes
    .route('/')
    .get(tasksController.getTasks)
    .post(tasksController.addTasks);

  routes
    .route('/:taskId')
    .put(tasksController.updateTaskById)
    .delete(tasksController.deleteTaskById);

  return routes;
}

module.exports = tasksRouter();
