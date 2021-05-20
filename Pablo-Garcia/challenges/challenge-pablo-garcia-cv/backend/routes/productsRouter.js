const { Router } = require('express');
const productsController = require('../controllers/productsController');

function router() {
  const routes = Router();

  routes
    .route('/')
    .get(productsController.get)
    .post(productsController.post);

  routes
    .route('/:postId')
    .put(productsController.updateProductById)
    .get(productsController.getPostById)
    .delete(productsController.deletePostById);
  return routes;
}
module.exports = router();
