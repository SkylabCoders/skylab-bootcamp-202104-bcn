const { Router } = require('express');
const todoController = require('../controllers/todoController')();

function taskRouter() {
  const routes = Router();

  routes
    .route('/')
    .get(todoController.getAll)
    .post(todoController.createTask);

  routes
    .route('/:taskId')
    .get(todoController.getTaskById)
    .delete(todoController.deleteTaskById);

  return routes;
}

module.exports = taskRouter();
