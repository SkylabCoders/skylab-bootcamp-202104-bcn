const { Router } = require('express');
const heroesController = require('../controllers/heroesController')();

function heroesRouter() {
  const routes = Router();

  routes.route('/')
    .get(heroesController.getAll)
    .post(heroesController.createOne);
  routes.route('/:heroId')
    .get(heroesController.getById)
    .delete(heroesController.deleteById)
    .put(heroesController.updateById);

  return routes;
}

module.exports = heroesRouter();
