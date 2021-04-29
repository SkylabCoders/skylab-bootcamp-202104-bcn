/* eslint-disable consistent-return */
import actionTypes from '../actions/actionTypes';
import TASKS from '../../services/index';

function taskReducer(tasks = [], action) {
  switch (action.type) {
    case actionTypes.PRINT_TASK:
      return TASKS;
    case actionTypes.ADD_TASK:
      return [
        ...tasks,
        action.task
      ];
    case actionTypes.DELETE_TASK:
      return tasks.filter((task) => task.id !== action.taskId);
    case actionTypes.MODIFY_TASK:
      return tasks.map(
        (task) => (task.id === action.task.id
          ? { ...task, ...action.task }
          : task)
      );
    case actionTypes.DELETE_ALL:
      return tasks.filter((task) => task.id !== action.task.id);
    default:
      return tasks;
  }
}
export default taskReducer;
