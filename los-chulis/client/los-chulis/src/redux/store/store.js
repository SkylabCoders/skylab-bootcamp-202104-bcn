import { applyMiddleware, compose, createStore } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../reducers/index';

const composeEnchacers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = (initialState) => createStore(
  rootReducer,
  initialState,
  composeEnchacers(applyMiddleware(thunk))
);

export default store;
