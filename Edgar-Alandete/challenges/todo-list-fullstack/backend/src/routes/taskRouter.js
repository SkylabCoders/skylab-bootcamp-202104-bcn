const { Router } = require('express');
const tasksController = require('../controllers/tasksController')();

function tasksRouter() {
  const routes = Router();
  routes.route('/')
    .get(tasksController.getAll)
    .post(tasksController.createTask);

  return routes;
}

module.exports = tasksRouter();
