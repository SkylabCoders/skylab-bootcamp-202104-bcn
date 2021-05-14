/* eslint-disable no-underscore-dangle */
import actionTypes from '../actions/actionType';

function tasksReducer(tasks = [], action) {
  let updateTasks = [...tasks];

  switch (action.type) {
    case actionTypes.GET_TASKS:
      updateTasks = [...action.tasks];
      break;
    case actionTypes.DELETE_TASK:
      updateTasks = tasks.filter((task) => task._id !== action.taskId);
      break;
    case actionTypes.CREATE_TASK:
      updateTasks = [...tasks, action.task];
      break;
    case actionTypes.UPDATE_TASK:
      updateTasks = tasks.map((task) => (
        task._id === action.task._id
          ? { ...task, ...action.task }
          : task
      ));
      break;
    default:
      updateTasks = tasks;
      break;
  }
  return updateTasks;
}

export default tasksReducer;
