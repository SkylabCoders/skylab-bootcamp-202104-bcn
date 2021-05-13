import { createStore } from 'redux';
import TasksReducer from '../reducers/tasksReducer';

const store = createStore(
  TasksReducer
);

export default store;
