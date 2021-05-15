const { Router } = require('express');
// const curriculumController = require('../controllers/curriculumController');

function curriculumRouter() {
  const routes = Router();

  routes
    .route('/');

  return routes;
}

module.exports = curriculumRouter();
