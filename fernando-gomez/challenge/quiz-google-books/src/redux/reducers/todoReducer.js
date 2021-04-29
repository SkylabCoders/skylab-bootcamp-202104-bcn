import actionTypes from '../actions/actionTypes';
import TODOS from '../../Constants/todolist';

const toDoReducer = (tasks = [], action) => {
  let listOfTasksUpdated;

  switch (action.type) {
    case actionTypes.ADD_TASK:
      listOfTasksUpdated = [
        ...tasks,
        action.task,
      ];
      break;

    case actionTypes.DELETE_TASK:
      listOfTasksUpdated = tasks.filter((task) => task.id !== action.task);
      break;

    case actionTypes.UPDATE_TASKS:
      listOfTasksUpdated = tasks;
      break;

    case actionTypes.LOAD_TASKS:
      listOfTasksUpdated = TODOS;
      break;

    default:
      listOfTasksUpdated = TODOS;
      break;
  }
  return listOfTasksUpdated;
};

export default toDoReducer;
