import TASKS from '../../constants/tasks.mock';
import actionTypes from '../actions/actionTypes';

function tasksReducer(tasks = [], action) {
  if (action.type === actionTypes.LOAD_TASKS) {
    // eslint-disable-next-line no-debugger
    debugger;
    return TASKS;
  }
  return tasks;
}

export default tasksReducer;
