import axios from 'axios';
import actionTypes from './actionTypes';

const taskUrl = 'http://localhost:2021/todo';

export function addTask(task) {
  return ({
    type: actionTypes.ADD_TASK,
    task
  });
}
export function deleteTask(taskId) {
  return ({
    type: actionTypes.DELETE_TASK,
    taskId
  });
}
export function loadTasks() {
  return async (dispatch) => {
    const { data } = await axios(taskUrl);
    dispatch({
      type: actionTypes.LOAD_TASK,
      products: data
    });
    dispatch({
      type: actionTypes.ERROR_PRODUCT
    });
  };
}
