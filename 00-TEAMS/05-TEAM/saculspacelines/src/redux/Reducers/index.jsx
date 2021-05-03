import { combineReducers } from 'redux';
import loadSwapiReducer from './swapireducer';

const rootReducer = combineReducers({
  people: loadSwapiReducer
});

export default rootReducer;
