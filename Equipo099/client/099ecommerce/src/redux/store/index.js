import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../reducers/index';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const configureStore = (initialState) => createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(thunk)),
  );

export default configureStore;
