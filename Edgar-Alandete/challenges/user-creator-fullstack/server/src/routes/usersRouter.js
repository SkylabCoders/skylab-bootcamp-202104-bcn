const { Router } = require('express');
const usersController = require('../controllers/usersController')();

function usersRouter() {
  const routes = Router();

  routes.route('/')
    .get(usersController.getAll);

  return routes;
}

module.exports = usersRouter();
