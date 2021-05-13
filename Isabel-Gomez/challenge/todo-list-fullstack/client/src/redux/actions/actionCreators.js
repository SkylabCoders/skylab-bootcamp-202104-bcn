/* eslint-disable no-debugger */
import axios from 'axios';
import actionTypes from './actionTypes';

const url = 'http://localhost:1305/to-do-list';

export function loadTasks() {
  debugger;
  return async (dispatch) => {
    try {
      const { data } = await axios(url);
      dispatch({
        type: actionTypes.LOAD_TASKS,
        tasks: data,
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
        itemId: data,
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
      const { data } = await axios.delete(`${url}/${itemId}`);
      dispatch({
        type: actionTypes.DELETE_TASK,
        itemId: data,
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
        itemId: data,
      });
    } catch (error) {
      dispatch({
        type: 'ERROR',
      });
    }
  };
}
