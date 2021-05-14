/* eslint-disable no-underscore-dangle */
/* eslint-disable no-console */
import axios from 'axios';
import actionTypes from './actionTypes';

const BASE_URL = process.env.REACT_APP_API_BASE_URL;

export function loadTasks(url = BASE_URL) {
  return async (dispatch) => {
    const { data } = await axios.get(url);
    dispatch({
      type: actionTypes.LOAD_TASKS,
      tasks: data,
    });
  };
}

export function addTask(task, url = BASE_URL) {
  return async (dispatch) => {
    const { data } = await axios.post(
      url,
      {
        ...task,
        done: false,
      },
    );
    dispatch({
      type: actionTypes.ADD_TASK,
      task: data,
    });
  };
}

export function deleteTask(taskId, url = BASE_URL) {
  return async (dispatch) => {
    try {
      await axios.delete(`${url}/${taskId}`);
      dispatch({
        type: actionTypes.DELETE_TASK,
        taskId,
      });
    } catch (error) {
      console.log(error);
    }
  };
}

export function getTaskById(taskId, url = BASE_URL) {
  return async (dispatch) => {
    const { data } = await axios.get(`${url}/${taskId}`);
    dispatch({
      type: actionTypes.LOAD_TASK,
      task: data,
    });
  };
}

export function updateTask(task, baseURL = BASE_URL) {
  const url = `${baseURL}/${task._id}`;
  return async (dispatch) => {
    const { data } = await axios.put(
      url,
      {
        title: task.title,
        description: task.description,
        done: task.done,
      },
    );
    dispatch({
      type: actionTypes.UPDATE_TASK,
      task: data,
    });
  };
}
