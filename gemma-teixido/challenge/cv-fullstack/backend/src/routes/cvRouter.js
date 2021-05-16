const { Router } = require('express');
const cvController = require('../controllers/cvController')();

function cvRouter() {
  const routes = Router();

  routes
    .route('/')
    .get(cvController.getInformation);

  routes
    .route('/:curriculumId')
    .get(cvController.getInformationById);

  return routes;
}

module.exports = cvRouter();
