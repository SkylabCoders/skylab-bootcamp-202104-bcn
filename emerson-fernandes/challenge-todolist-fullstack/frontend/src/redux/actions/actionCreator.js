import axios from 'axios';
import actionTypes from './actionTypes';

const taskUrl = 'http://localhost:2021/todo';

export function addTask(task) {
  return async (dispatch) => {
    const { data } = await axios.post(taskUrl, task);
    dispatch({
      type: actionTypes.ADD_TASK,
      task: data
    });
  };
}
export function deleteTask(taskId) {
  return async (dispatch) => {
    await axios.delete(`${taskUrl}/${taskId}`);
    dispatch({
      type: actionTypes.DELETE_TASK,
      taskId
    });
  };
}
export function loadTasks() {
  return async (dispatch) => {
    const { data } = await axios.get(taskUrl);
    dispatch({
      type: actionTypes.LOAD_TASKS,
      tasks: data
    });
    dispatch({
      type: actionTypes.ERROR_TASK
    });
  };
}
