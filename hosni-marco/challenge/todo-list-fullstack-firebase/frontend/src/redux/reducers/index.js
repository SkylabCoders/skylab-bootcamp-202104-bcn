import { combineReducers } from 'redux';
import tasksReducer from './tasksReducer';
import selectedTaskReducer from './selectedTaskReducer';
import user from './authReducer';

const rootReducer = combineReducers({
  tasks: tasksReducer,
  selectedTask: selectedTaskReducer,
  user
});

export default rootReducer;
