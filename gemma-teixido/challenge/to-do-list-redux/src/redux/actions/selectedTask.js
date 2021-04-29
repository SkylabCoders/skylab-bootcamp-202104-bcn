import actionTypes from './actionType';

function taskReducer(task = {}, action) {
  switch (action.type) {
    case actionTypes.LOAD_TASK:
      return action.task;

    default:
      return task;
  }
}

export default taskReducer;
