import actionTypes from './actionTypes';

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

export function deleteTask(taskID) {
  return {
    type: actionTypes.DELETE_TASK,
    taskId: taskID,
  };
}

export function updateTask(task) {
  return {
    type: actionTypes.UPDATE_TASK,
    task,
  };
}

export function loadTask(task) {
  return {
    type: actionTypes.LOAD_TASK,
    task,
  };
}
