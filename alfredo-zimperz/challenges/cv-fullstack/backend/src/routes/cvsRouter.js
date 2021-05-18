const { Router } = require('express');
const tasksController = require('../controllers/cvsController')();

function cvsRouter() {
  const routes = Router();

  routes
    .route('/')
    .get(tasksController.getAll);

  return routes;
}

module.exports = cvsRouter();
