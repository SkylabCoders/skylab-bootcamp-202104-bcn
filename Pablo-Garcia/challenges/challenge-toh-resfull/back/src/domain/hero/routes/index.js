import { Router } from 'express';
import { getAll, createOne, getById, updateById, deleteById } from '../controllers/index.js';

function router() {
  const routes = Router();

  routes
    .route('/')
    .get(getAll)
    .post(createOne);

  routes
    .route('/:id')
    .get(getById)
    .put(updateById)
    .delete(deleteById);

  return routes;
}

export default app => app.use('/heroes', router());
