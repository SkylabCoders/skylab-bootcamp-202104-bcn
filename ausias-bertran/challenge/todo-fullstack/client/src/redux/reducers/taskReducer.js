import actionTypes from '../actions/actionTypes';
import TASKS from '../../constants/tasks.mock';

function taskReducer(tasks = [],
  action) {
  switch (action.type) {
    case actionTypes.LOAD_TASKS:
      return TASKS;

    case actionTypes.ADD_TASK:
      return [...tasks, action.task];

    case actionTypes.DELETE_TASK:

      // const newTaskList = tasks.filter((task) => task.id !== task.ID);
      // newTaskList.map((task) => { task.id = task.length + 1; });
      return tasks.filter((task) => task.id !== task.ID);

    case actionTypes.UPDATE_TASK:
      return tasks.map((task) => (task.id === action.task.id
        ? { ...task, ...action.task }
        : task));

    default:
      return tasks;
  }
}

export default taskReducer;
