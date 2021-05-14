/* eslint-disable no-underscore-dangle */
import axios from 'axios';
import actionTypes from './actionTypes';

const url = process.env.REACT_APP_TASKS_API_DEV;

export const loadTasks = () => async (dispatch) => {
  try {
    const { data } = await axios(url);
    dispatch({
      type: actionTypes.LOAD_TASKS,
      tasks: data,
    });
  } catch (error) {
    dispatch({
      type: actionTypes.LOAD_TASKS_ERROR,
    });
  }
};

export const createTask = (task) => async (dispatch) => {
  const newTask = { ...task, isFinished: false };
  try {
    const { data } = await axios.post(url, newTask);
    dispatch({
      type: actionTypes.ADD_TASK,
      task: data,
    });
  } catch (error) {
    dispatch({
      type: actionTypes.ADD_TASK_ERROR,
    });
  }
};

export const deleteTask = (taskId) => async (dispatch) => {
  try {
    await axios.delete(`${url}${taskId}`);
    dispatch({
      type: actionTypes.DELETE_TASK,
      taskId,
    });
  } catch (error) {
    dispatch({
      type: actionTypes.DELETE_TASK_ERROR,
    });
  }
};

export const updateTask = (task) => async (dispatch) => {
  try {
    const { data } = await axios.put(`${url}${task._id}`, {
      isFinished: true,
    });
    dispatch({
      type: actionTypes.UPDATE_TASK,
      task: data,
    });
  } catch (error) {
    dispatch({
      type: actionTypes.UPDATE_TASK_ERROR,
    });
  }
};
