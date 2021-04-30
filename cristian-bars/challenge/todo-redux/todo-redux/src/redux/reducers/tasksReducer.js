import TASKS from '../../constants/task-mock';
import actionTypes from '../actions/actionTypes';

function TasksReducer(tasks = [], action) {
  switch (action.type) {
    case actionTypes.LOAD_TASKS:
      return TASKS;

    default:
      return tasks;
  }
}

export default TasksReducer;
