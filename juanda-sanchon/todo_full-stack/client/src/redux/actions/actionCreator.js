import actionTypes from './actioTypes';

export function addTask(task) {
  return {
    type: actionTypes.ADD_TASK,
    task
  };
}
export function loadTask() {
  return {
    type: actionTypes.LOAD_TASK
  };
}
