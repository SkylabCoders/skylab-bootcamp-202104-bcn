import { combineReducers } from 'redux';
import swapiReducer from './swapireducer';
import localDataReducer from './localDataReducer';

const rootReducer = combineReducers({
  swapiReducer,
  localDataReducer
});

export default rootReducer;
