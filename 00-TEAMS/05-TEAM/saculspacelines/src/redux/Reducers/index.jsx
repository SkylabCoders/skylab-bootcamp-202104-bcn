import { combineReducers } from 'redux';
import swapiReducer from './swapireducer';

const rootReducer = combineReducers(
  swapiReducer
);

export default rootReducer;
