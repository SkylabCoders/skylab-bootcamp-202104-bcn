import axios from 'axios';
import actionTypes from './actionTypes';

const url = 'http://127.0.0.1:2021/tasks/';

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

export const loadTasksByStatus = (status) => ({
  type: actionTypes.LOAD_TASKS,
  status,
});

export const updateTask = (task) => ({
  type: actionTypes.UPDATE_TASK,
  task,
});

export const deleteTask = (taskId) => ({
  type: actionTypes.DELETE_TASK,
  taskId,
});

export const createTask = (task) => ({
  type: actionTypes.ADD_TASK,
  task,
});
