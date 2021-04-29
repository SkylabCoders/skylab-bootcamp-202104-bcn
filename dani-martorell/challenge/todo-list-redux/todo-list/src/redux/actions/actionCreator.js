import actionTypes from './actioTypes';

export function loadTasks() {
  return {
    type: actionTypes.LOAD_TASKS,
  };
}

export function addTask(task) {
  return {
    type: actionTypes.ADD_TASK,
    task,
  };
}

export function deleteTask(idTask) {
  return {
    type: actionTypes.DELETE_TASK,
    idTask,
  };
}

export function finish(idTask) {
  return {
    type: actionTypes.DELETE_TASK,
    idTask,
  };
}
