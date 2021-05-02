import actionTypes from './actionTypes';

export function createTask(task) {
  return {
    type: actionTypes.ADD_TASK_LIST,
    task,
  };
}

export function showList() {
  return {
    type: actionTypes.SHOW_LIST,
  };
}
