const { Router } = require('express');
const tasksController = require('../controllers/tasksController')();

function tasksRouter() {
  const routes = Router();
  routes.route('/')
    .get(tasksController.getAll);

  return routes;
}

module.exports = tasksRouter();
