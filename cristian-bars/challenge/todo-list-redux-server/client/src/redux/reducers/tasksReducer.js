/* eslint-disable no-underscore-dangle */
import actionTypes from '../actions/actionTypes';

function tasksReducer(tasks = [], action) {
  let putTask = '';
  console.log(action.type);
  switch (action.type) {
    case actionTypes.LOAD_TASKS:
      return action.tasks;

    case actionTypes.ADD_TASK:
      return [...tasks, action.task];

    case actionTypes.DELETE_TASK:
      return tasks.filter((task) => task._id !== action.taskId._id);

    case actionTypes.DONE_TASK:
      putTask = tasks.find((task) => task._id === action.taskId._id);
      console.log(`fadfsdaf ${putTask}`);
      return tasks;

    default:
      return tasks;
  }
}

export default tasksReducer;
