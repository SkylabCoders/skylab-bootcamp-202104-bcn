import { createStore } from 'redux';
import taskReducer from '../reducers/taskReducer';

/* eslint-disable no-underscore-dangle */
const store = createStore(
  taskReducer, /* preloadedState, */
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);
/* eslint-enable */
export default store;
