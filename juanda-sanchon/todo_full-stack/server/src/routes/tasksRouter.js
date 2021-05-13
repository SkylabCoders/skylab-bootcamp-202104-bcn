const { Router } = require('express');
const tasksController = require('../controller/tasksController')();

function tasksRouter() {
  const routes = Router();

  routes
    .route('/')
    .get(tasksController.getAllProducts)
    .post(tasksController.createOne);

  routes
    .route('/:productId')
    .put(tasksController.updateById);

  return routes;
}

module.exports = tasksRouter();
