import { combineReducers } from 'redux';
import trivialReducer from './trivialReducer';
import authReducer from './authReducer';

const rootReducer = combineReducers({
  gameData: trivialReducer,
  auth: authReducer
});

export default rootReducer;
