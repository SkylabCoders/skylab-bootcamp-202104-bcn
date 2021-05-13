/* eslint-disable no-underscore-dangle */
import axios from 'axios';
import actionTypes from './actionTypes';

const tasksURL = 'http://localhost:2023/tasks';

export function loadTasks() {
  return async (dispatch) => {
    try {
      const { data } = await axios(tasksURL);
      dispatch({
        type: actionTypes.LOAD_TASKS,
        tasks: data,
      });
    } catch (error) {
      dispatch({
        type: actionTypes.LOAD_TASK_ERROR,
      });
    }
  };
}
export function addTask(task) {
  return async (dispatch) => {
    try {
      const { data } = await axios.post(tasksURL, task);
      dispatch({
        type: actionTypes.ADD_TASK,
        task: data,
      });
    } catch (error) {
      dispatch({
        type: actionTypes.LOAD_TASK_ERROR,
      });
    }
  };
}
export function deleteTask(task) {
  return async (dispatch) => {
    try {
      await axios.delete(`${tasksURL}/${task._id}`);
      dispatch({
        type: actionTypes.DELETE_TASK,
        task,
      });
    } catch (error) {
      dispatch({
        type: actionTypes.LOAD_TASK_ERROR,
      });
    }
  };
}

export function updateTask(task) {
  return async (dispatch) => {
    try {
      const { data } = await axios.put(`${tasksURL}/${task._id}`, task);
      dispatch({
        type: actionTypes.UPDATE_TASK,
        task: data,
      });
    } catch (error) {
      dispatch({
        type: actionTypes.LOAD_TASK_ERROR,
      });
    }
  };
}

export function loadTask(task) {
  return {
    type: actionTypes.LOAD_TASK,
    task,
  };
}
