const { Router } = require('express');
const cvController = require('../controller/cvController')();

function cvRouter() {
  const routes = Router();

  routes
    .route('/')
    .get(cvController.getAll)
    .post(cvController.addData);

  routes
    .route('/:cv');

  return routes;
}

module.exports = cvRouter();
