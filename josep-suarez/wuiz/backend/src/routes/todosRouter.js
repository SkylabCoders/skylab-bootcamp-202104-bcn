const { Router } = require('express');
const todosController = require('../controllers/todosController')();

function todosRouter() {
  const routes = Router();
  routes
    .route('/')
    .get(todosController.getAll)
    .post(todosController.createOne);

  routes
    .route('/:todoId')
    .delete(todosController.deleteById);

  return routes;
}

module.exports = todosRouter();
