/* eslint-disable no-underscore-dangle */
import axios from 'axios';
import actionTypes from './actionTypes';

const url = 'http://localhost:2400/tasks';

export function loadTasks() {
  return async (dispatch) => {
    try {
      const { data } = await axios(url);
      dispatch({
        type: actionTypes.LOAD_TASKS,
        allTasks: data,
      });
    } catch (error) {
      dispatch({
        type: actionTypes.LOAD_TASKS_ERROR,
      });
    }
  };
}

export function addTask(newTask) {
  return async (dispatch) => {
    try {
      const { data } = await axios.post(url, newTask);
      dispatch({
        type: actionTypes.ADD_TASK,
        newTask: data,
      });
    } catch (error) {
      dispatch({
        type: actionTypes.LOAD_TASKS_ERROR,
      });
    }
  };
}

export function deleteTask(task) {
  return async (dispatch) => {
    try {
      await axios.delete(`${url}/${task._id}`);
      dispatch({
        type: actionTypes.DELETE_TASK,
        task,
      });
    } catch (error) {
      dispatch({
        type: actionTypes.LOAD_TASKS_ERROR,
      });
    }
  };
}

export function doneTask(task) {
  return async (dispatch) => {
    try {
      const { data } = await axios.put(`${url}/${task._id}`, task);
      dispatch({
        type: actionTypes.DONE_TASK,
        updateTask: data,
      });
    } catch (error) {
      dispatch({
        type: actionTypes.LOAD_TASKS_ERROR,
      });
    }
  };
}
