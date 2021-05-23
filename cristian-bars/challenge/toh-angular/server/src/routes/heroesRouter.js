const { Router } = require('express');
const heroesController = require('../controller/heroesController')();

function heroesRouter() {
  const routes = Router();

  routes
    .route('/')
    .get(heroesController.getAll)
    .post(heroesController.addHero);

  routes
    .route('/:heroes')
    .get(heroesController.getHeroById)
    .delete(heroesController.delHero);

  return routes;
}

module.exports = heroesRouter();
