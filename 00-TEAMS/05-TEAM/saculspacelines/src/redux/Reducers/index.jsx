import { combineReducers } from 'redux';
import swapiReducer from './swapireducer';
import localDataReducer from './localDataReducer';
import userActionReducer from './userActionReducer';

const rootReducer = combineReducers({
  swapiReducer,
  localDataReducer,
  userActionReducer
});

export default rootReducer;
