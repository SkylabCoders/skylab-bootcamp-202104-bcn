const { Router } = require('express');
const motosController = require('../controllers/motosController')();

function motosRouter() {
  const routes = Router();
  routes
    .route('/')
    .get(motosController.getAll)
    .post(motosController.createOne);

  // routes
  //   .route('/racing')
  //   .get(motosController.getByType);
  // routes
  //   .route('/custom')
  //   .get(motosController.getByType);
  // routes
  //   .route('/scooter')
  //   .get(motosController.getByType);
  // routes
  //   .route('/vespa')
  //   .get(motosController.getByType);
  // routes
  //   .route('/accesorios')
  //   .get(motosController.getByType);
  // routes
  //   .route('/ofertas')
  //   .get(motosController.getByType);
  // routes
  //   .route('/:motoId')
  //   .get(motosController.deleteById);

  return routes;
}

module.exports = motosRouter();
