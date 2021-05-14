/* eslint-disable no-underscore-dangle */
import actionTypes from '../actions/actionTypes';

function taskReducer(tasks = [], action) {
  switch (action.type) {
    case actionTypes.ADD_TASK:
      return [
        ...tasks,
        action.task
      ];

    case actionTypes.DELETE_TASK:
      return tasks.filter((task) => task._id !== action.taskId);

    case actionTypes.LOAD_TASKS:
      return action.tasks;

    default:
      return tasks;
  }
}

export default taskReducer;
