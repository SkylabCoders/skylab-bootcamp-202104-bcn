/* eslint-disable no-console */
import axios from 'axios';
import actionTypes from './actionTypes';

const BASE_URL = 'http://localhost:2021/tasks';

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
    console.log('url ----->', `${url}/${taskId}`);
    const { data } = await axios.get(`${url}/${taskId}`);
    console.log('data---------->', data);

    dispatch({
      type: actionTypes.LOAD_TASK,
      task: data,
    });
  };
}

export function updateTask(task) {
  return {
    type: actionTypes.UPDATE_TASK,
    task,
  };
}
// export function loadTask(task) {
//   return {
//     type: actionTypes.LOAD_TASK,
//     task,
//   };
// }
