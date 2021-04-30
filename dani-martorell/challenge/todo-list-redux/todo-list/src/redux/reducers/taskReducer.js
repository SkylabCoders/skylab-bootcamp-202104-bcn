import TASKS from '../../constants/TASKS';
import actionType from '../actions/actionTypes';

function taskReducer(tasks = [], action) {
  // eslint-disable-next-line no-debugger
  switch (action.type) {
    case actionType.LOAD_TASKS:
      return TASKS;
    case actionType.ADD_TASK:
      return [...tasks, action.task];
    case actionType.DELETE_TASK:
      return tasks.filter((task) => task.id !== action.idTask);
    case actionType.FINISH_TASK:
      return tasks;
    default:
      return tasks;
  }
}

export default taskReducer;
