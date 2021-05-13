const { Router } = require('express');
const taskController = require('../controllers/taskController')();

function taskRouter() {
  const routes = Router();

  routes
    .route('/')
    .post(taskController.createTask);

  routes
    .route('/:taskId')
    .delete(taskController.deleteTaskById);

  return routes;
}

module.exports = taskRouter();
