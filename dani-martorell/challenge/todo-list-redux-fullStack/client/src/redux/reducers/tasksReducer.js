import actionTypes from '../actions/actionTypes';

function tasksReducer(tasks = [], action) {
  switch (action.type) {
    case actionTypes.LOAD_TASKS:
      return action.tasks;
    case actionTypes.ADD_TASK:
      return [...tasks, action.task];
    case actionTypes.DELETE_TASK:
      if (action.response === 204) {
        return '204';
      }
      return 'no';

    default:
      return tasks;
  }
}
export default tasksReducer;
