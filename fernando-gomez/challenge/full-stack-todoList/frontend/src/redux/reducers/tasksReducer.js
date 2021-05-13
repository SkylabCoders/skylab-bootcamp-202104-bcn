/* eslint-disable no-underscore-dangle */
import actionTypes from '../actions/actionTypes';

function tasksReducer(tasks = [], action) {
  let updatedTasks = [...tasks];

  switch (action.type) {
    case actionTypes.LOAD_TASKS:
      updatedTasks = action.tasks;
      break;

    case actionTypes.ADD_TASK:
      return [
        ...tasks,
        action.task
      ];

    case actionTypes.UPDATE_TASK:
      return tasks.map(
        (task) => (task._id === action.task._id
          ? { ...task, ...action.task }
          : task)
      );

    case actionTypes.DELETE_TASK:
      return tasks.filter((task) => task._id !== task._taskId);

    default:
      return updatedTasks;
  }
  return updatedTasks;
}

export default tasksReducer;
