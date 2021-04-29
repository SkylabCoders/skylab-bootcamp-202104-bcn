import actionTypes from './actionTypes';

export default function loadTasks() {
  return {
    type: actionTypes.LOAD_TASKS
  };
}

export function addTask(newTask) {
  return {
    type: actionTypes.ADD_TASK,
    newTask
  };
}

export function deleteTask(taskId) {
  return {
    type: actionTypes.DELETE_TASK,
    taskId
  };
}

export function doneTask(taskId) {
  return {
    type: actionTypes.DONE_TASK,
    taskId
  };
}
