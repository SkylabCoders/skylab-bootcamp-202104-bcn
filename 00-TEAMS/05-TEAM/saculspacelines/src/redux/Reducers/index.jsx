import { combineReducers } from 'redux';
import {
  loadSwapiReducer, loadSwapiPeople, loadSwapiStarships, loadSwapiPlanets
} from './swapireducer';
import localDataReducer from './localDataReducer';
import userActionReducer from './userActionReducer';
import authReducer from './authReducer';

const rootReducer = combineReducers({
  loadSwapiPeople,
  loadSwapiPlanets,
  loadSwapiReducer,
  loadSwapiStarships,
  localDataReducer,
  userActionReducer,
  authReducer
});

export default rootReducer;
