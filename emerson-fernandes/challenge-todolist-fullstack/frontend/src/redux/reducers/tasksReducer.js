import actionTypes from '../actions/actionTypes';

function tasksReducer(tasks = [], action) {
  switch (action.type) {
    case actionTypes.LOAD_TASKS:
      return action.tasks;
    
    case actionTypes.DELETE_TASK:
      return tasks.filter((task) => task.id !== action.taskId);

    case actionTypes.ADD_TASK:
      return [
        ...tasks,
        action.task
      ];
}
