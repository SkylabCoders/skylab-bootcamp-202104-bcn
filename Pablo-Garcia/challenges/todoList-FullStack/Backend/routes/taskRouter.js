const { Router } = require('express');
const heroesController = require('../controllers/taskController')();

function heroesRouter() {
  const routes = Router();

  routes
    .route('/')
    .get(heroesController.getAll)
    .post(heroesController.createOne);

  routes
    .route('/:taskId/')
    .get(heroesController.getById)
    .put(heroesController.updateById)
    .delete(heroesController.deleteTaskById);

  return routes;
}

module.exports = heroesRouter();
