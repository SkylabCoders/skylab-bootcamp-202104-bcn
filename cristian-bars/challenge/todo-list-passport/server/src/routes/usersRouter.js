const { Router } = require('express');
const loginController = require('../controllers/loginController')();

function usersRouter() {
  const routes = Router();

  routes
    .route('/')
    .post(loginController.createUser);

  return routes;
}

module.exports = usersRouter();
