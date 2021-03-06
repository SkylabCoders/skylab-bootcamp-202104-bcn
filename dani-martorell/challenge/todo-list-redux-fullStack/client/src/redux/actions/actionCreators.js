/* eslint-disable no-debugger */
/* eslint-disable no-underscore-dangle */
import axios from 'axios';
import actionTypes from './actionTypes';

const url = 'http://localhost:2020/tasks'; // TODO: use ENV VARIABLE

export function loadTasks() {
  return async (dispatch) => {
    try {
      const { data } = await axios(url);
      dispatch({
        type: actionTypes.LOAD_TASKS,
        tasks: data,
      });
    } catch (error) {
      dispatch({
        type: 'LOAD_TASKS_ERROR',
      });
    }
  };
}
export function addTask(task) {
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
export function deleteTask(taskId) {
  return async (dispatch) => {
    try {
      const { data, status } = await axios.delete(`${url}/${taskId}`);
      dispatch({
        type: actionTypes.DELETE_TASK,
        response: { data, status },
      });
    } catch (error) {
      dispatch({
        type: 'ADD_TASK_ERROR',
      });
    }
  };
}
export function updateTask(task) {
  return async (dispatch) => {
    try {
      const { data } = await axios.put(`${url}/${task._id}`, task);
      dispatch({
        type: actionTypes.UPDATE_TASK,
        task: data,
      });
    } catch (error) {
      dispatch({
        type: 'UPDATE_TASK_ERROR',
      });
    }
  };
}
export function markAsDone(task) {
  return async (dispatch) => {
    try {
      const { data } = await axios.put(`${url}/${task._id}`, task);
      dispatch({
        type: actionTypes.COMPLETE_TASK,
        task: data,
      });
    } catch (error) {
      dispatch({
        type: 'COMPLETE_TASK_ERROR',
      });
    }
  };
}
