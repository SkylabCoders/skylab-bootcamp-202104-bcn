import actionTypes from '../actions/actionTypes';

const taskReducer = (stateTask = [], action) => {
  switch (action.type) {
    case actionTypes.LOAD_TASKS:
      return [...stateTask];
    case actionTypes.ADD_TASK:
      return [...stateTask, action.item];
    case actionTypes.DELETE_TASK:
      return stateTask.filter((element) => element.id !== action.itemId);
    case actionTypes.UPDATE_TASK:
      return stateTask.map((element) => ((element.id === action.item.data)
        ? [...element, ...action.item.data]
        : element));
    default:
      return stateTask;
  }
};

export default taskReducer;
