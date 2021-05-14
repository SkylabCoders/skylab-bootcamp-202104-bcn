const { Router } = require('express');
const tasks = require('../tasks');
const tasksController = require('../controllers/tasksController')(tasks);

function tasksRouter() {
  const routes = Router();

  routes
    .route('/')
    .get(tasksController.getAllTasks);
  //   .post(tasksController.createOne);

  routes
    .route('/:taskId');
  //   .get(tasksController.getById)
  //   .put(tasksController.updateById)
  //   .delete(tasksController.deleteById);

  return routes;
}

module.exports = tasksRouter();
