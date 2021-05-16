const { Router } = require('express');
const curriculumController = require('../controllers/curriculumController')();

function cvRouter() {
  const routes = Router();

  routes
    .route('/')
    .get(curriculumController.getCV)
    .post(curriculumController.createCV);
  return routes;
}

module.exports = cvRouter();
