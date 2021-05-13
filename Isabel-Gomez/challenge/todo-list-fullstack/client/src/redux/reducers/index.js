import { combineReducers } from 'redux';
import taskReducer from './taskReducer';

const rootReducer = combineReducers({
  items: taskReducer,
});

export default rootReducer;
