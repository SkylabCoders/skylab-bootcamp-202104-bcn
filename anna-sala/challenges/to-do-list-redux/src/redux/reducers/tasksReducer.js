import actionTypes from '../actions/actionTypes';
import TASKS from '../../constants/tasks.mock';

function tasksReducer(tasks = [], action) {
  switch (action.type) {
    case actionTypes.LOAD_TASKS:
      return TASKS;
    case actionTypes.DELETE_TASK:
      return tasks.filter((task) => task.id !== action.taskId);
    case actionTypes.ADD_TASK:
      return [
        ...tasks,
        action.task,
      ];
    case actionTypes.UPDATE_TASK:
      return tasks.map((task) => (task.id === action.task.id
        ? { ...task, ...action.task }
        : task));
    default:
      return tasks;
  }
}

export default tasksReducer;
