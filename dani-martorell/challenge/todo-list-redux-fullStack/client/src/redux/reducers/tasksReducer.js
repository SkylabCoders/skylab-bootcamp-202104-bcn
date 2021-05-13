import actionTypes from '../actions/actionTypes';

function tasksReducer(tasks = [], action) {
  switch (action.type) {
    case actionTypes.LOAD_TASKS:
      return action.tasks;
    case actionTypes.ADD_TASK:
      return [...tasks, action.task];
    default:
      return tasks;
  }
}
export default tasksReducer;
