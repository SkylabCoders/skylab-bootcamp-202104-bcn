const { Router } = require('express');
const todoListController = require('../controllers/todoListController.js')();

function todoListRouter() {
  const routes = Router();

  routes
    .route('/')
    .get(todoListController.getAll)
    .post(todoListController.createOne);

  routes
    .route('/:taskId')
    .get(todoListController.getById)
    .put(todoListController.updateById)
    .delete(todoListController.deleteById);

  return routes;
}

module.exports = todoListRouter();
