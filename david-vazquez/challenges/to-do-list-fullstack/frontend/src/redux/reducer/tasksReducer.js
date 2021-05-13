/* eslint-disable no-underscore-dangle */
import actionTypes from '../actions/actionTypes';

function tasksReducer(tasks = [], action) {
  switch (action.type) {
    case actionTypes.LOAD_TASKS:
      return action.allTasks;
    case actionTypes.ADD_TASK:
      return [...tasks, action.newTask];
    case actionTypes.DELETE_TASK:
      tasks.splice(tasks.indexOf(action.task), 1);
      return [...tasks];
    case actionTypes.DONE_TASK:
      return tasks.map((task) => ((
        task._id === action.updateTask._id) ? { ...task, state: true } : task));
    default:
      return tasks;
  }
}

export default tasksReducer;
