/* eslint-disable no-underscore-dangle */
import actionTypes from '../actions/actionTypes';

function tasksReducer(tasks = [], action) {
  switch (action.type) {
    case actionTypes.LOAD_TASKS:
      return action.tasks;

    case actionTypes.DELETE_TASK:
      return tasks.filter((task) => task._id !== action.taskId);

    case actionTypes.ADD_TASK:

      return [
        ...tasks,
        action.task
      ];

    default:
      return tasks;
  }
}

export default tasksReducer;
