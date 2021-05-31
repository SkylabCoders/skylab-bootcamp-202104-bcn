const { Router } = require('express');
const usersController = require('../controllers/usersController')();

function usersRouter() {
  const routes = Router();

  routes
    .route('/')
    .get(usersController.getAll)
    .post(usersController.addUser);

  routes
    .route('/:userId/')
    .get(usersController.getUserById)
    .put(usersController.updateUserById)
    .delete(usersController.deleteUserById);

  return routes;
}

module.exports = usersRouter();
