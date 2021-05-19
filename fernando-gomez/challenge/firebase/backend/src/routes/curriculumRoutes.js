const { Router } = require('express');
const curriculumController = require('../controllers/curriculumController')();

function curriculumRouter() {
  const routes = Router();

  routes
    .route('/')
    .get(curriculumController.getAll)
    .post(curriculumController.addCurriculum);

  routes
    .route('/:curriculumId/')
    .put(curriculumController.updateCurriculumById)
    .delete(curriculumController.deleteCurriculumById);

  return routes;
}

module.exports = curriculumRouter();