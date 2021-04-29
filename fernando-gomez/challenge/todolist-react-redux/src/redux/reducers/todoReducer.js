import actionTypes from '../actions/actionTypes';
import TODOS from '../../Constants/todolist';

const deleteSeveral = (idsToDeleteArray, tasksArray) => {
  let newTasksArray = [];
  console.log(`elimina los ids siguientes ${idsToDeleteArray}`);

  idsToDeleteArray.forEach((idToDelete) => {
    if (tasksArray.some((task) => task.id === idToDelete)) {
      newTasksArray = tasksArray.filter((task) => task.id !== idToDelete);
    }
  });

  return newTasksArray;
};

const toDoReducer = (tasks = [], action) => {
  let listOfTasksUpdated;

  switch (action.type) {
    case actionTypes.ADD_TASK:
      listOfTasksUpdated = [
        ...tasks,
        action.task,
      ];
      break;

    case actionTypes.EDIT_TASK:
      listOfTasksUpdated = tasks.map((task) => (
        (task.id === action.task.id
          ? { ...task, ...action.task }
          : task)
      ));
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

    case actionTypes.DELETE_SEVERAL_TASKS:
      listOfTasksUpdated = deleteSeveral(action.task, tasks);
      break;

    default:
      listOfTasksUpdated = TODOS;
      break;
  }
  return listOfTasksUpdated;
};

export default toDoReducer;
