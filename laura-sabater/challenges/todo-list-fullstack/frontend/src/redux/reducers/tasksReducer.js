/* eslint-disable no-underscore-dangle */
import actionTypes from '../actions/actionTypes';

function tasksReducer(tasks = [], action) {
  let updatedTasks = [...tasks];

  switch (action.type) {
    case actionTypes.LOAD_TASKS:
      updatedTasks = action.tasks;
      break;
    case actionTypes.ADD_TASK:
      updatedTasks = [...tasks, action.task];
      break;
    case actionTypes.DELETE_TASK:
      updatedTasks = updatedTasks.filter((task) => task._id !== action.taskId);
      break;
    default:
      return updatedTasks;
  }
  return updatedTasks;
}

export default tasksReducer;
