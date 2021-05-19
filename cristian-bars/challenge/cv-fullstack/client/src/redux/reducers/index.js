import { combineReducers } from 'redux';
import infoReducer from './infoReducer';

const rootReducer = combineReducers({
  tasks: infoReducer
});

export default rootReducer;
