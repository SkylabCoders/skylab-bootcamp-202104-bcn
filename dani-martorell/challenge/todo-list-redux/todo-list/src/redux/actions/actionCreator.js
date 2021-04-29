import actionType from './actionTypes';

export function loadTasks() {
  return {
    type: actionType.LOAD_TASKS,
  };
}

export function addTask(task) {
  return {
    type: actionType.ADD_TASK,
    task,
  };
}

export function deleteTask(idTask) {
  return {
    type: actionType.DELETE_TASK,
    idTask,
  };
}

export function finish(idTask) {
  return {
    type: actionType.DELETE_TASK,
    idTask,
  };
}
