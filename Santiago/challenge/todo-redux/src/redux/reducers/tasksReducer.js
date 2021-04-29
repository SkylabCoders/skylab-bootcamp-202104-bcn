import TASKS from '../../constants/task-mock';
import actionTypes from '../actions/actionTypes';

function TasksReducer(tasks = [], action) {
  switch (action.type) {
    case actionTypes.LOAD_TASKS:
      return TASKS;
    case actionTypes.ADD_TASK:
      return [...tasks, action.newTask];
    case actionTypes.DELETE_TASK:
      return tasks.filter((task) => task.id !== task.heroId);
    default:
      return tasks;
  }
}

export default TasksReducer;
