import TASKS from '../../constant/task-mock';
import actionType from '../actions/actionType';

function taskReducer(tasks = [], action) {
  switch (action.type) {
    case actionType.LOAD_TASKS:
      return TASKS;
    case actionType.ADD_TASK:
      return [...tasks, action.newTask];
    case actionType.DELETE_TASK:
      return tasks.filter((task) => task.id !== action.idTask);
    default:
      return tasks;
  }
}

export default taskReducer;
