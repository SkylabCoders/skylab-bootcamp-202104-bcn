// importemos el createStore
// tengamos a mano los reducers con los que voy a crear y actualizar mi store

import { createStore } from 'redux';
import rootReducers from './reducers';

const store = createStore(
  rootReducers,
);

export default store;
