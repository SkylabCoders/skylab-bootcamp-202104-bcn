import axios from 'axios';
import actionTypes from './actionTypes';

const url = 'http://localhost:2021/heroes/';

export function loadTasks() {
  return async (dispatch) => {
    try {
      const { data } = await axios(url);
      dispatch({
        type: actionTypes.LOAD_TASKS,
        items: data,
      });
    } catch (error) {
      dispatch({
        type: 'ERROR',
      });
    }
  };
}

export function addTask(itemId) {
  return async (dispatch) => {
    try {
      const { data } = await axios.post(`${url}/${itemId}`);
      dispatch({
        type: actionTypes.ADD_TASK,
        items: data,
      });
    } catch (error) {
      dispatch({
        type: 'ERROR',
      });
    }
  };
}

export function deleteTask(itemId) {
  return async (dispatch) => {
    try {
      await axios.delete(`${url}/${itemId}`);
      dispatch({
        type: actionTypes.DELETE_TASK,
        itemId,
      });
    } catch (error) {
      dispatch({
        type: 'ERROR',
      });
    }
  };
}

export function updateTask(itemId) {
  return async (dispatch) => {
    try {
      const { data } = await axios.put(`${url}/${itemId}`);
      dispatch({
        type: actionTypes.UPDATE_TASK,
        item: data,
      });
    } catch (error) {
      dispatch({
        type: 'ERROR',
      });
    }
  };
}
