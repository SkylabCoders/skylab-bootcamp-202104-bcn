/* eslint-disable no-debugger */
import actionTypes from '../actions/actionTypes';

const taskReducer = (stateTask = [], action) => {
  debugger;
  switch (action.type) {
    case actionTypes.LOAD_TASKS:
      return action.tasks;
    case actionTypes.ADD_TASK:
      return [...stateTask, action.item];
    case actionTypes.DELETE_TASK:
      return stateTask.filter((element) => element.id !== action.itemId);
    case actionTypes.UPDATE_TASK:
      return stateTask.map((element) => ((element.id === action.itemId)
        ? [...element, ...action.itemId]
        : element));
    default:
      return stateTask;
  }
};

export default taskReducer;
