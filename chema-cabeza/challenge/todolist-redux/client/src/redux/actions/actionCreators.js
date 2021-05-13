import axios from 'axios';
import actionTypes from './actionTypes';

const url = 'http://localhost:4545/list';

// eslint-disable-next-line import/prefer-default-export
export function loadList() {
  return async (dispatch) => {
    try {
      const { data } = await axios(url);
      dispatch({
        type: actionTypes.LOAD_LIST,
        list: data,
      });
    } catch (error) {
      dispatch({
        type: 'LOAD_LIST_ERROR',
      });
    }
  };
}

export function deleteTask(taskId) {
  return {
    type: actionTypes.DELETE_TASK,
    taskId,
  };
}

export function addtask(task) {
  return async (dispatch) => {
    try {
      const { data } = await axios.post(url, task);
      dispatch({
        type: actionTypes.ADD_TASK,
        task: data,
      });
    } catch (error) {
      dispatch({
        type: 'ADD_TASK_ERROR',
      });
    }
  };
}

export function updateTask(task) {
  return {
    type: actionTypes.UPDATE_TASK,
    task,
  };
}
