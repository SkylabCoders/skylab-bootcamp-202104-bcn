const { Router } = require('express');
const curriculumsController = require('../controllers/curriculumsController')();

function curriculumsRouter() {
  const routes = Router();

  routes
    .route('/')
    .get(curriculumsController.getAll);
  //   .post(curriculumsController.createOne);

  //   routes
  //     .route('/:productId')
  //     .get(curriculumsController.getById)
  //     .put(curriculumsController.updateById)
  //     .delete(curriculumsController.deleteById);

  return routes;
}

module.exports = curriculumsRouter();
