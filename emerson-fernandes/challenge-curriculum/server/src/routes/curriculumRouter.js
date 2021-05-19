const { Router } = require('express');
const curriculumController = require('../controllers/curriculumController')();

function heroesRouter() {
  const routes = Router();

  routes
    .route('/')
    .get(curriculumController.getAll)
    .post(curriculumController.createOne);

  routes
    .route('/:curriculumId')
    .get(curriculumController.getById)
    .put(curriculumController.updateById)
    .delete(curriculumController.deleteById);

  return routes;
}

module.exports = heroesRouter();
