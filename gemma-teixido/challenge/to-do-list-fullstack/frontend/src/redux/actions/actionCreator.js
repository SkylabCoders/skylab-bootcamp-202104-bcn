import axios from 'axios';
import actionTypes from './actionType';

const url = 'http://localhost:1305/to-do-list';

export function loadTasks() {
  return async (dispatch) => {
    try {
      const { data } = await axios(url);
      dispatch({
        type: actionTypes.LOAD_TASKS,
        tasks: data
      });
    } catch (error) {
      dispatch({
        type: 'LOAD_TASKS_ERROR'
      });
    }
  };
}

export function addTask(task) {
  return async (dispatch) => {
    const { data } = await axios.post(url, task);
    dispatch({
      type: actionTypes.ADD_TASK,
      task: data
    });
  };
}

export function deleteTask(taskId) {
  return {
    type: actionTypes.DELETE_TASK,
    taskId
  };
}

export function doneTask(taskId) {
  return {
    type: actionTypes.DONE_TASK,
    taskId
  };
}
