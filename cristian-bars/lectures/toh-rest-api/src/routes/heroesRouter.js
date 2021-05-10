const { Router } = require('express');
const heroes = require('../heroes');
const heroesController = require('../controllers/heroesController')(heroes);

function heroesRouter() {
  const routes = Router();

  routes
    .route('/')
    .get(heroesController.getAll);

  routes
    .route('/:heroId')
    .get(heroesController.getHeroById)
    .delete(heroesController.deleteHeroById);

  return routes;
}

module.exports = heroesRouter();
