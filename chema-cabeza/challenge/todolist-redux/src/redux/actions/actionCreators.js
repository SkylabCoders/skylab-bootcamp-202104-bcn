import actionTypes from './actionTypes';

// eslint-disable-next-line import/prefer-default-export
export function loadList() {
  return {
    type: actionTypes.LOAD_LIST,
  };
}

export function deleteTask(taskId) {
  return {
    type: actionTypes.DELETE_TASK,
    taskId,
  };
}

export function addtask(task) {
  return {
    type: actionTypes.ADD_TASK,
    task,
  };
}

export function updateTask(task) {
  return {
    type: actionTypes.UPDATE_TASK,
    task,
  };
}
