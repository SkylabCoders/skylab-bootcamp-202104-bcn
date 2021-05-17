const { Router } = require('express');
const elementsController = require('../controllers/elementsControllers')();

function elementsRouter() {
  const routes = Router();

  routes
    .route('/')
    .get(elementsController.getAllElements)
    .post(elementsController.createOne);

  routes
    .route('/:curriculumId')
    .get(elementsController.getById)
    .put(elementsController.updateById);

  return routes;
}

module.exports = elementsRouter();
