/* eslint-disable no-underscore-dangle */
/* eslint-disable no-debugger */
import actionTypes from '../actions/actionTypes';

const taskReducer = (stateTask = [], action) => {
  switch (action.type) {
    case actionTypes.LOAD_TASKS:
      return action.tasks;
    case actionTypes.ADD_TASK:
      return [...stateTask, action.tasks];
    case actionTypes.DELETE_TASK:
      return stateTask.filter((element) => element._id !== action.taskId);
    case actionTypes.UPDATE_TASK:
      return stateTask.map((element) => ((element.id === action.taskId)
        ? [...element, ...action.taskId]
        : element));
    case actionTypes.DONE_TASKS:
      return stateTask.map((element) => ((element.id === action.taskId)
        ? action.taskId.completed === true
        : element));
    default:
      return stateTask;
  }
};

export default taskReducer;
