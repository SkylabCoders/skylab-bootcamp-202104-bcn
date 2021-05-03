import actionTypes from './actionTypes';

export function addTask(data) {
  return {
    type: actionTypes.ADD_TYPES,
    payload: data,
  };
}

export function deleteTask(data) {
  return {
    type: actionTypes.DELETE_TASK,
    payload: data.id,
  };
}

export function editTask(data) {
  return {
    type: actionTypes.EDIT_TASK,
    payload: data,
  };
}
