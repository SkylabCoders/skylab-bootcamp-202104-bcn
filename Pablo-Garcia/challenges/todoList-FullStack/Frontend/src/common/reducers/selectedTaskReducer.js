import actionTypes from '../actions/actionType';

function selectedTaskReducer(task = {}, action) {
  let selectedTask = { ...task };
  if (action.type === actionTypes.GET_TASK) {
    selectedTask = { ...action.task };
  }
  return selectedTask;
}
export default selectedTaskReducer;
