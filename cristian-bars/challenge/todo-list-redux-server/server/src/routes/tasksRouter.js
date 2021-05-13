const { Router } = require('express');
const tasks = require('../tasks');
const tasksController = require('../controllers/tasksController')(tasks);

function tasksRouter() {
  const routes = Router();

  routes
    .route('/')
    .get(tasksController.getAll)
    .post(tasksController.addTask)
    .delete(tasksController.delTask);

  return routes;
}

module.exports = tasksRouter();
