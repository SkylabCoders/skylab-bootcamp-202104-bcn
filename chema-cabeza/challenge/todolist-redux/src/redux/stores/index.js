/* eslint-disable no-underscore-dangle */
import { applyMiddleware, createStore, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../reducers/rootReducer';

const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION__COMPOSE__) || compose;
const store = createStore(
  rootReducer, /* preloadedState, */
  composeEnhancers(applyMiddleware(thunk)),
);

export default store;
