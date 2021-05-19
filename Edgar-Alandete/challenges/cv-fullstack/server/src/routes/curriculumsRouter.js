const { Router } = require('express');
const curriculumsController = require('../controllers/curriculumsController')();

function curriculumsRouter() {
  const routes = Router();
  routes.route('/')
    .get(curriculumsController.getAll);
  return routes;
}

module.exports = curriculumsRouter();
