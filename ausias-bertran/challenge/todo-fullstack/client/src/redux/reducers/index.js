import { comnineReducers } from 'redux';
import taskReducer from './taskReducer';

const rootReducer = comnineReducers({
  tasks: taskReducer,
});

export default rootReducer;
