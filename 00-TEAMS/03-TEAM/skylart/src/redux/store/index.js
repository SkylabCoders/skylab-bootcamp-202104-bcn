import { applyMiddleware, createStore, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../reducers';

function configureStore() {
  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
  || compose;
  return createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(thunk)),
  );
}

export default configureStore;
