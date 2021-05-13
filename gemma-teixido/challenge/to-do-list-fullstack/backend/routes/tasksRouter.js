const { Router } = require('express');
const tasks = require('../model/tasks')
const tasksController = require('../controllers/tasksController')(tasks);

function tasksRouter() {
  const routes = Router();

  routes
    .route('/')
    .get(tasksController.getAll)

  return routes;
}

module.exports = tasksRouter();