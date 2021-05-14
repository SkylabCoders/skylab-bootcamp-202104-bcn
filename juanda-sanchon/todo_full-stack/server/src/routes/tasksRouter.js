const { Router } = require('express');
const INITIALTASK = require('../task');
const tasksController = require('../controller/tasksController')(INITIALTASK);

function tasksRouter() {
  const routes = Router();

  routes
    .route('/')
    .get(tasksController.getAllTasks)
    .post(tasksController.createOne);

  routes
    .route('/:productId');

  return routes;
}

module.exports = tasksRouter();
