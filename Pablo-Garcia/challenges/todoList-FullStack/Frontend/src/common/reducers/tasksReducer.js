import actionTypes from '../actions/actionType';

function tasksReducer(tasks = [], action) {
  switch (action.type) {
    case actionTypes.GET_TASK:
      return action.tasks;
    case actionTypes.DELETE_TASK:
      return tasks.filter((task) => task.id !== action.taskId);
    default:
      return tasks;
  }
}

export default tasksReducer;
