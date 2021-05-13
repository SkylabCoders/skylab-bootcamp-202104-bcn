import actionTypes from '../actions/actionTypes';

function selectedTaskReducer(task = {}, action) {
  let selectedTask = { ...task };

  if (action.type === actionTypes.LOAD_TASK) {
    selectedTask = { ...action.task };
  }

  return selectedTask;
}

export default selectedTaskReducer;
