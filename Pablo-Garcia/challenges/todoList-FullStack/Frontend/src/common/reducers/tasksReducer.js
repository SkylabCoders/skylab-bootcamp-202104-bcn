/* eslint-disable no-underscore-dangle */
import actionTypes from '../actions/actionType';

function tasksReducer(tasks = [], action) {
  switch (action.type) {
    case actionTypes.GET_TASKS:
      return [...action.tasks];
    case actionTypes.DELETE_TASK:
      return tasks.filter((task) => task._id !== action.taskId);
    case actionTypes.CREATE_TASK:
      return [...tasks, action.task];
    case actionTypes.UPDATE_TASK:
      return tasks.map((task) => (
        task._id === action.task._id
          ? { ...task, ...action.task }
          : task
      ));
    default:
      return tasks;
  }
}

export default tasksReducer;
