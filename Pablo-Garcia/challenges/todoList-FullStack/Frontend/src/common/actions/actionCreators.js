/* eslint-disable no-underscore-dangle */
import axios from 'axios';
import actionTypes from './actionType';

const BASE_URL = 'http://localhost:2024/tasks';

export function getTask(url = BASE_URL) {
  return async (dispatch) => {
    try {
      const { data } = await axios.get(url);
      dispatch({
        type: actionTypes.GET_TASKS,
        tasks: data
      });
    } catch (error) {
      dispatch({
        type: 'GET_TASK'
      });
    }
  };
}
export function deleteTask(taskId, url = BASE_URL) {
  return async (dispatch) => {
    try {
      await axios.delete(`${url}/${taskId}`);
      dispatch({
        type: actionTypes.DELETE_TASK,
        taskId
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
      type: actionTypes.GET_TASK,
      task: data
    });
  };
}

export function createOne(task, url = BASE_URL) {
  return async (dispatch) => {
    try {
      const { data } = await axios.post(url, task);
      dispatch({
        type: actionTypes.CREATE_TASK,
        task: data
      });
    } catch (error) {
      console.log(error);
    }
  };
}

export function updateById(task, baseURL = BASE_URL) {
  const url = `${baseURL}/${task._id}`;
  return async (dispatch) => {
    const { data } = await axios.put(
      url,
      {
        task: task.task,
        description_task: task.description_task,
        done: task.done
      }
    );
    dispatch({
      type: actionTypes.UPDATE_TASK,
      task: data
    });
  };
}
