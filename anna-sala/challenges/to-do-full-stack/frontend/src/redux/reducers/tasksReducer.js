/* eslint-disable no-underscore-dangle */
import actionTypes from '../actions/actionTypes';

function tasksReducer(tasks = [], action) {
  switch (action.type) {
    case actionTypes.LOAD_TASKS:
      return action.tasks;
    case actionTypes.DELETE_TASK:
      return tasks.filter((task) => task._id !== action.task._id);
    case actionTypes.ADD_TASK:
      return [
        ...tasks,
        action.task,
      ];
    case actionTypes.UPDATE_TASK:
      return tasks.map((task) => (task._id === action.task._id
        ? { ...task, ...action.task }
        : task));
    default:
      return tasks;
  }
}

export default tasksReducer;
