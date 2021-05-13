import { applyMiddleware, compose, createStore } from 'redux';
import thunk from 'redux-thunk';
import tasksReducer from '../reducer/tasksReducer';

const composeEnchacers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = (initialState) => createStore(
  tasksReducer,
  initialState,
  composeEnchacers(applyMiddleware(thunk)),
);

export default store;
