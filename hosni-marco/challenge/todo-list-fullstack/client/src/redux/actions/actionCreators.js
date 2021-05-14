/* eslint-disable no-console */
/* eslint-disable no-underscore-dangle */
import axios from 'axios';
import actionTypes from './actionTypes';

const URL = 'http://localhost:2021/todoList';

export function loadTasks() {
  return async (dispatch) => {
    const { data } = await axios(URL);
    dispatch({
      type: actionTypes.LOAD_TASKS,
      tasks: data
    });
  };
}

export function addTask(task) {
  return async (dispatch) => {
    const { data } = await axios.post(URL, task);
    dispatch({
      type: actionTypes.ADD_TASK,
      task: data
    });
  };
}

export function deleteTask(taskId) {
  return async (dispatch) => {
    await axios.delete(`${URL}/${taskId}`);
    dispatch({
      type: actionTypes.DELETE_TASK,
      taskId
    });
  };
}

export function updateTask(task) {
  return async (dispatch) => {
    try {
      const { data } = await axios.put(`${URL}/${task._id}`, task);
      dispatch({
        type: actionTypes.UPDATE_TASK,
        task: data.task
      });
    } catch {
      console.log('error');
    }
  };
}

export function getTaskById(taskId) {
  return async (dispatch) => {
    try {
      const { data } = await axios.get(`${URL}/${taskId}`);
      dispatch({
        type: actionTypes.LOAD_TASK,
        task: data
      });
    } catch {
      console.log('error');
    }
  };
}
