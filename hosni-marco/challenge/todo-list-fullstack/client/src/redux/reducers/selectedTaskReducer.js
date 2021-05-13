import actionTypes from '../actions/actionTypes';

function selectedTaskReducer(task = {}, action) {
  let selectedTask = { ...task };
  // eslint-disable-next-line no-debugger
  debugger;

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
