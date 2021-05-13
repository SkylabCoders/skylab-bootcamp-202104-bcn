import TASKS from '../../constants/task.mock';
import actionTypes from '../actions/actionTypes';

function tasksReducer(tasks = [], action) {
  switch (action.type) {
    case actionTypes.LOAD_TASKS:
      return TASKS;
    case actionTypes.ADD_TASK:
      return [...tasks, action.newTask];
    case actionTypes.DELETE_TASK:
      return tasks.filter((task) => task.id !== action.idTask);
    case actionTypes.DONE_TASK:
      return tasks.map((task) => ((
        task.id === action.idTask) ? { ...task, state: true } : task));
    default:
      return tasks;
  }
}

export default tasksReducer;
