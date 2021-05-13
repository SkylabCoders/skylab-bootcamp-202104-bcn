/* eslint-disable no-underscore-dangle */
import axios from 'axios';
import actionTypes from './actionTypes';

const tasksUrl = 'http://localhost:2021/tasks';

export function loadTasks() {
  return async (dispatch) => {
    const { data } = await axios(tasksUrl);
    dispatch({
      type: actionTypes.LOAD_TASKS,
      tasks: data
    });
    dispatch({
      type: actionTypes.TASK_ERROR
    });
  };
}

export function addTask(task) {
  return async (dispatch) => {
    const { data } = await axios.post(tasksUrl, task);
    dispatch({
      type: actionTypes.ADD_TASK,
      task: data
    });
  };
}

export function deleteTask(taskId) {
  return async (dispatch) => {
    await axios.delete(`${tasksUrl}/${taskId}`);
    dispatch({
      type: actionTypes.DELETE_TASK,
      taskId
    });
  };
}

export function updateTask(task) {
  return async (dispatch) => {
    const { data } = await axios.put(`${tasksUrl}/${task._id}`, task);
    dispatch({
      type: actionTypes.UPDATE_TASK,
      task: data
    });
  };
}
