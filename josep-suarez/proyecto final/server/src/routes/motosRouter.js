const { Router } = require('express');
const motosController = require('../controllers/motosController')();

function motosRouter() {
  const routes = Router();
  routes
    .route('/')
    .get(motosController.getAll);

  return routes;
}

module.exports = motosRouter();
