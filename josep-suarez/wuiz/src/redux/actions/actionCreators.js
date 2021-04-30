/* eslint-disable import/prefer-default-export */
import actionTypes from './actionTypes';

export function PrintTask() {
  return {
    type: actionTypes.PRINT_TASK
  };
}
export function addTask(task) {
  return {
    type: actionTypes.ADD_TASK,
    task
  };
}
export function deleteTask(taskId) {
  return {
    type: actionTypes.DELETE_TASK,
    taskId
  };
}
export function modifyTask(task) {
  return {
    type: actionTypes.MODIFY_TASK,
    task
  };
}
export function deleteTasksSelected(taskSelected) {
  return {
    type: actionTypes.DELETE_ALL,
    taskSelected
  };
}
