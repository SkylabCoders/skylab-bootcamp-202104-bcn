const { Router } = require('express');
const tohController = require('../controllers/tohController')();

function tohRouter() {
  const routes = Router();

  routes
    .route('/')
    .get(tohController.getAll)
    .post(tohController.addHero);

  routes
    .route('/:heroId')
    .delete(tohController.deleteById);

  return routes;
}

module.exports = tohRouter();
