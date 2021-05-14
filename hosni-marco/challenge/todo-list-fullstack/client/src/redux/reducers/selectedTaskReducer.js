import actionTypes from '../actions/actionTypes';

function selectedTaskReducer(task = {}, action) {
  let selectedTask = { ...task };
  switch (action.type) {
    case actionTypes.LOAD_TASK:
      selectedTask = action.task;
      break;
    default:
      selectedTask = task;
      break;
  }
  return selectedTask;
}

export default selectedTaskReducer;
