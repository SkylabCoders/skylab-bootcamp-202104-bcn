const { Router } = require('express');
const userController = require('../controllers/userController')();

function tohRouter() {
  const routes = Router();

  routes
    .route('/')
    .get(userController.getAll)
    .post(userController.addUser);

  routes
    .route('/:userId')
    .get(userController.getById)
    .put(userController.updateById)
    .delete(userController.deleteById);

  return routes;
}

module.exports = tohRouter();
