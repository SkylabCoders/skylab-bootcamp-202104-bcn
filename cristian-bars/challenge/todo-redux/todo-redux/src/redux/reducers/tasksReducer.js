import TASKS from '../../constants/task-mock';
import actionTypes from '../actions/actionTypes';

function tasksReducer(tasks = [], action) {
  switch (action.type) {
    case actionTypes.LOAD_TASKS:
      return TASKS;

    case actionTypes.ADD_TASK:
      return [...tasks, action.newTask];

    case actionTypes.DELETE_TASK:
      return tasks.filter((task) => task.task !== action.taskId.task);

    default:
      return tasks;
  }
}

export default tasksReducer;
