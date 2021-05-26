const { Router } = require('express');

const userController = require('../controllers/userController')();

function userRouter() {
  const routes = Router();

  routes
    .route('/')
    .get(userController.getAll)
    .post(userController.createOne);

  routes
    .route('/:todoId')
    .delete(userController.deleteById)
    .put(userController.updateById);

  return routes;
}

module.exports = userRouter();
