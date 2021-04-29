import TASKS from '../constants/tasksList';
import actionTypes from './actionType';

export function loadTasks() {
  return {
    type: actionTypes.LOAD_TASKS,
    TASKS
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
