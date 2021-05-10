const { Router } = require('express');
const heroes = require('../heroes.mock');
const heroesController = require('../controllers/heroesController')(heroes);

function heroesRouter() {
  const routes = Router();

  routes.route('/')
    .get(heroesController.getAll)
    .post(heroesController.createOne);

  return routes;
}

module.exports = heroesRouter();
