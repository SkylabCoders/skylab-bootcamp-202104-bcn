import { applyMiddleware, compose, createStore } from 'redux';
import thunk from 'redux-thunk';
import curriculumReducer from '../reducers';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const configureStore = (initialState) => createStore(
  curriculumReducer,
  initialState,
  composeEnhancers(applyMiddleware(thunk)),
);

export default configureStore;
