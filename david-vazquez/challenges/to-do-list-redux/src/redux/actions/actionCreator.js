import actionTypes from './actionTypes';

export function loadTasks() {
  return {
    type: actionTypes.LOAD_TASKS,
  };
}

export function addTask(newTask) {
  return {
    type: actionTypes.ADD_TASK,
    newTask,
  };
}

export function deleteTask(idTask) {
  return {
    type: actionTypes.DELETE_TASK,
    idTask,
  };
}

export function doneTask(idTask) {
  return {
    type: actionTypes.DONE_TASK,
    idTask,
  };
}
