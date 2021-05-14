import axios from 'axios';
import actionTypes from './actioTypes';

const url = 'http://localhost:2330/tasks';

export function addTask(task) {
  return async (dispatch) => {
    try {
      const { data } = await axios.post(url, task);
      dispatch({
        type: actionTypes.ADD_TASK,
        task: data
      });
    } catch (error) {
      dispatch({
        type: actionTypes.LOAD_TASK_ERROR

      });
    }
  };
}

export function loadTask() {
  return async (dispatch) => {
    try {
      const { data } = await axios(url);
      dispatch({
        type: actionTypes.LOAD_TASKS,
        task: data
      });
    } catch (error) {
      dispatch({
        type: actionTypes.LOAD_TASK_ERROR
      });
    }
  };
}
