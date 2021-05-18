import axios from 'axios';
import actionTypes from './actionTypes';

const tasksUrl = 'http://localhost:2021/todo';

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

export function loadTasks() {
  return async (dispatch) => {
    try {
      const { data } = await axios(tasksUrl);
      dispatch({
        type: actionTypes.LOAD_TASKS,
        tasks: data
      });
    } catch (error) {
      dispatch({
        type: actionTypes.ERROR_TASK
      });
    }
  };
}
