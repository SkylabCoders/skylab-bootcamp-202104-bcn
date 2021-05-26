const { Router } = require('express');
const usersController = require('../controllers/usersController')();

function usersRouter() {
  const routes = Router();

  routes.route('/')
    .get(usersController.getAll)
    .post(usersController.createOne);

  routes.route('/:userId')
    .get(usersController.getById)
    .delete(usersController.deleteById)
    .put(usersController.updateById);

  return routes;
}

module.exports = usersRouter();
