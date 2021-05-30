const { Router } = require('express');
const todolistController = require('../controllers/todolistController')();

function todolistRouter() {
  const routes = Router();

  routes
    .route('/')
    .get(todolistController.getAll)
    .post(todolistController.createOne);

  routes
    .route('/:taskId')
    .delete(todolistController.deleteById)
    .put(todolistController.updateById);
  // .get(todolistController.getById)

  return routes;
}

module.exports = todolistRouter();
