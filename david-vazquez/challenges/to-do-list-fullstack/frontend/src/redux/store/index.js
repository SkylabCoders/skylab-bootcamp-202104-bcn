import { applyMiddleware, compose, createStore } from 'redux';
import thunk from 'redux-thunk';
import tasksReducer from '../reducer/tasksReducer';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = (initialState) => createStore(
  tasksReducer,
  initialState,
  composeEnhancers(applyMiddleware(thunk)),
);

export default store;
