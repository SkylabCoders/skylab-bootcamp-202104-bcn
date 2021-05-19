const { Router } = require('express');
const productsController = require('../controllers/productsController');

function router() {
  const routes = Router();

  routes
    .route('/')
    .get(productsController.get)
    .post(productsController.post)
    .put(productsController.put);

  routes
    .route('/:detailId')
    .put(productsController.updateProductById);
  return routes;
}
module.exports = router();
