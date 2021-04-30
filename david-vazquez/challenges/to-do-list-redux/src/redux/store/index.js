import { createStore } from 'redux';
import tasksReducer from '../reducer/tasksReducer';

const store = createStore(
  tasksReducer,

);

export default store;
