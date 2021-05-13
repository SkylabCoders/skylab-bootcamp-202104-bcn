import TASKS from '../../constants/task-mock';
import actionTypes from '../actions/actionTypes';

function TasksReducer(tasks = [], action) {
  switch (action.type) {
    case actionTypes.LOAD_TASKS:
      return TASKS;
    case actionTypes.ADD_TASK:
      return [...tasks, action.newTask];
    case actionTypes.DELETE_TASK:
      return tasks.filter((task) => task.id !== action.taskId);
    case actionTypes.DONE_TASK:
      return tasks.map((task) => ((task.id === action.taskId)
        ? { ...task, completed: true }
        : task));
    default:
      return tasks;
  }
}

export default TasksReducer;
