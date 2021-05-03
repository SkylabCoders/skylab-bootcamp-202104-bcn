import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rooteReducer from '../reducers/rootReducer';

function configureStore() {
  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  return createStore(
    rooteReducer,
    composeEnhancers(applyMiddleware(thunk))
  );
}
export default configureStore();
