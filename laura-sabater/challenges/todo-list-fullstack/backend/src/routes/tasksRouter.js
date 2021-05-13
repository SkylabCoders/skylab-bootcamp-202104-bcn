const { Router } = require('express');
// const products = require('../data/products');
const tasksController = require('../controllers/tasksController')();

function tasksRouter() {
  const routes = Router();

  routes
    .route('/')
    .get(tasksController.getTasks)
    .post(tasksController.addTask);

  routes
    .route('/:taskId/')
    .delete(tasksController.deleteTask);

  return routes;
}

module.exports = tasksRouter();
