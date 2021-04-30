/* eslint-disable no-underscore-dangle */
import { applyMiddleware, createStore, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './redux/reducers';

const composeEnhancers = (typeof window !== 'undefined'
&& window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE_)
|| compose;
const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
);
export default store;
