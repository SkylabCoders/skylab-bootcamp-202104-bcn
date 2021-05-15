const { Router } = require('express');
const elementsController = require('../controllers/elementsControllers')();

function elementsRouter() {
  const routes = Router();

  routes
    .route('/')
    .get(elementsController.getAll)
    .post(elementsController.createOne);

  routes
    .route('/:elementId')
    .put(elementsController.updateById);

  return routes;
}

module.exports = elementsRouter();
