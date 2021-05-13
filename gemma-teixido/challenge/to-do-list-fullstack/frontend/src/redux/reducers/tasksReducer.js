/* eslint-disable no-debugger */
/* eslint-disable no-underscore-dangle */
import actionType from '../actions/actionType';

function tasksReducer(tasks = [], action) {
  debugger;
  switch (action.type) {
    case actionType.LOAD_TASKS:
      return action.tasks;

    case actionType.DELETE_TASK:
      return tasks.filter((task) => task._id !== action.taskId);

    case actionType.ADD_TASK:
      return [
        ...tasks,
        action.task
      ];

    case actionType.DONE_TASK:
      return tasks.map((task) => ((task._id === action.taskId)
        ? { ...task, completed: true }
        : task));

    default:
      return tasks;
  }
}

export default tasksReducer;
