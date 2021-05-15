const { Router } = require('express');
// const cvController = require('../controllers/cvController');

function cvRouter() {
  const routes = Router();

  routes
    .route('/');

  return routes;
}

module.exports = cvRouter();
