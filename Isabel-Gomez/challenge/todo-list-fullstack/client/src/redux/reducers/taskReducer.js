import actionTypes from '../actions/actionTypes';

const taskReducer = (stateTask = [], action) => {
  switch (action.type) {
    case actionTypes.ADD_TYPES:
      return stateTask.push(action.payload);
    case actionTypes.DELETE_TASK:
      return stateTask.filter((element) => element.id !== action.payload);
    case actionTypes.EDIT_TASK:
      return stateTask.map((element) => ((element.id === action.payload.id)
        ? { ...element, ...action.payload }
        : element));
    default:
      return stateTask;
  }
};

export default taskReducer;
