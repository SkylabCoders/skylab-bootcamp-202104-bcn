const { Router } = require('express');
const tasksController = require('../controllers/tasksController')();

function tasksRouter() {
  const routes = Router();

  routes
    .route('/')
    .get(tasksController.getAllTasks)
    .post(tasksController.createOne);

  routes
    .route('/:taskId')
    .put(tasksController.updateById)
    .delete(tasksController.deleteById);

  return routes;
}

module.exports = tasksRouter();
