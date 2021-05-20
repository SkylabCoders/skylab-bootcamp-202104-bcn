const { Router } = require('express');
const vcController = require('../controllers/cvController')();

function heroesRouter() {
  const routes = Router();

  routes
    .route('/')
    .get(vcController.getAll);

  return routes;
}

module.exports = heroesRouter();
