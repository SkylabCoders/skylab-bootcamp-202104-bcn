/* eslint-disable import/prefer-default-export */
import axios from 'axios';
import actionTypes from './actionTypes';

const url = 'http://localhost:2021/todos';

export function PrintTask() {
  // eslint-disable-next-line no-debugger
  debugger;
  return async (dispatch) => {
    const { data } = await axios(url);
    dispatch({
      type: actionTypes.PRINT_TASK,
      task: data
    });
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
