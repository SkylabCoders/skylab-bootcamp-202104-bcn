import { combineReducers } from 'redux';
import swapiReducer from './swapireducer';
import localDataReducer from './localDataReducer';
import userActionReducer from './userActionReducer';
import authReducer from './authReducer';

const rootReducer = combineReducers({
  swapiReducer,
  localDataReducer,
  userActionReducer,
  authReducer
});

export default rootReducer;
