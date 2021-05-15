const { Router } = require('express');
const cvController = require('../controllers/cvController')();

function cvRouter() {
  const routes = Router();

  routes
    .route('/')
    .get(cvController.getInformation);

  return routes;
}

module.exports = cvRouter();
