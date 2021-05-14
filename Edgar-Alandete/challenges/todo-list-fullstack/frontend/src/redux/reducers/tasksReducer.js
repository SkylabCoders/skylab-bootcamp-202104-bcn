/* eslint-disable no-underscore-dangle */
import actionTypes from '../actions/actionTypes';

function tasksReducer(tasks = [], action) {
  let newTasks = [...tasks];
  switch (action.type) {
    case actionTypes.LOAD_TASKS:
      newTasks = action.tasks;
      break;
    case actionTypes.DELETE_TASK:
      newTasks = newTasks.filter((task) => task._id !== action.taskId);
      break;
    case actionTypes.ADD_TASK:
      return [
        ...newTasks,
        action.task,
      ];
    case actionTypes.UPDATE_TASK:
      newTasks = newTasks.map(
        (task) => (task._id === action.task._id
          ? { ...task, ...action.task }
          : task),
      );
      break;
    default:
      break;
  }
  return newTasks;
}

export default tasksReducer;
