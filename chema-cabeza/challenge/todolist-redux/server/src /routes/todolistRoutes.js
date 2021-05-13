const { Router } = require('express');
const todolistController = require('../controllers/todolistController')();

function todolistRouter() {
  const routes = Router();

  routes
    .route('/')
    .get(todolistController.getAll)
    .post(todolistController.createOne);

  // routes
  // .route('/:heroId')
  // .get(todolistController.getById)
  // .put(todolistController.updateById)
  // .delete(todolistController.deleteById);

  return routes;
}

module.exports = todolistRouter();
