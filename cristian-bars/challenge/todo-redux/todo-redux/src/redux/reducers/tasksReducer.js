import TASKS from '../../constants/task-mock';
import actionTypes from '../actions/actionTypes';

function tasksReducer(tasks = [], action) {
  switch (action.type) {
    case actionTypes.LOAD_TASKS:
      return TASKS;

    default:
      return tasks;
  }
}

export default tasksReducer;
