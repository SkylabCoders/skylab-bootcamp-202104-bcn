/* eslint-disable no-debugger */
import actionTypes from '../actions/actionTypes';
// import TASKS from '../../constants/tasks.mock';

function tasksReducer(tasks = [], action) {
  let updatedTasks = [...tasks];
  debugger;
  switch (action.type) {
    case actionTypes.LOAD_TASKS:
      return action.tasks;
    case actionTypes.DELETE_TASK:
      updatedTasks = tasks.filter((task) => task.id !== action.taskId);
      break;
    case actionTypes.ADD_TASK:
      updatedTasks = [...tasks, action.task];
      break;
    case actionTypes.UPDATE_TASK:
      updatedTasks = tasks.map((task) => (
        task.id === action.task.id
          ? { ...task, ...action.task }
          : task
      ));
      break;
    default:
      updatedTasks = tasks;
      break;
  }
  return updatedTasks;
}

export default tasksReducer;
