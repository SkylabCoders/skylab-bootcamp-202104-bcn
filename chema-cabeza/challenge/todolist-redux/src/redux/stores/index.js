/* eslint-disable no-underscore-dangle */
import { createStore } from 'redux';
import rootReducer from '../reducers/rootReducer';

const store = createStore(
  rootReducer, /* preloadedState, */
  // composeEnhancers(applyMiddleware(thunk)),
);

export default store;
