import { combineReducers } from 'redux';
import {
  loadSwapiPeople, loadSwapiStarships, loadSwapiPlanets
} from './swapireducer';
import localDataReducer from './localDataReducer';
import userActionReducer from './userActionReducer';
import authReducer from './authReducer';

const rootReducer = combineReducers({
  loadSwapiPeople,
  loadSwapiPlanets,
  loadSwapiStarships,
  localDataReducer,
  userActionReducer,
  authReducer
});

export default rootReducer;
