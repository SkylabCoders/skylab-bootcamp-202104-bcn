const { Router } = require('express');
const vcController = require('../controllers/cvController')();

function heroesRouter() {
  const routes = Router();

  routes
    .route('/')
    .get(vcController.getAll);
  // .post(vcController.createOne);

  //   routes
  //     .route('/:heroId')
  //     .get(vcController.getById)
  //     .put(vcController.updateById)
  //     .delete(vcController.deleteById);

  return routes;
}

module.exports = heroesRouter();
