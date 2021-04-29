import actionTypes from './actionTypes';

export function addTask() {
  return {
    type: actionTypes.ADD_TYPES,
  };
}

export function deleteTask() {
  return {
    type: actionTypes.DELETE_TASK,
  };
}

export function editTask() {
  return {
    type: actionTypes.EDIT_TASK,
  };
}

export function loadTasks() {
  return {
    type: actionTypes.LOAD_TASKS,
  };
}
