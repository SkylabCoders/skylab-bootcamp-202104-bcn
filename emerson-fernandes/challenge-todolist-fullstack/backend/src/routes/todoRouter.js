const { Router } = require('express');
const todoController = require('../controllers/todoController')();

function taskRouter() {
  const routes = Router();

  routes
    .route('/')
    .post(todoController.createTask);

  return routes;
}

module.exports = taskRouter();
