/* eslint-disable no-underscore-dangle */
import actionTypes from '../actions/actionTypes';

function tasksReducer(tasks = [], action) {
  let updatedTasks = [...tasks];
  switch (action.type) {
    case actionTypes.LOAD_TASKS:
      return action.tasks;
    case actionTypes.DELETE_TASK:
      updatedTasks = tasks.filter((task) => task._id !== action.taskId);
      break;
    case actionTypes.ADD_TASK:
      updatedTasks = [...tasks, action.task];
      break;
    case actionTypes.UPDATE_TASK:
      updatedTasks = tasks.map((task) => (
        task._id === action.task._id
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
