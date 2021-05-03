import { combineReducers } from 'redux';
import trivialReducer from './trivialReducer';

const rootReducer = combineReducers({
  gameData: trivialReducer
});

export default rootReducer;
