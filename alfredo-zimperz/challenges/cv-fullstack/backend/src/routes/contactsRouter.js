const { Router } = require('express');
const contactsController = require('../controllers/contactsController')();

function cvsRouter() {
  const routes = Router();

  routes
    .route('/')
    .post(contactsController.create);

  return routes;
}

module.exports = cvsRouter();
