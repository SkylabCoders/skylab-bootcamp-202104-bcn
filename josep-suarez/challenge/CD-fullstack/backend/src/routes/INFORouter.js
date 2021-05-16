const { Router } = require('express');
const CVcontroller = require('../controllers/CVcontroller')();

function INFORouter() {
  const routes = Router();
  routes
    .route('/')
    .get(CVcontroller.getAll);

  return routes;
}

module.exports = INFORouter();
