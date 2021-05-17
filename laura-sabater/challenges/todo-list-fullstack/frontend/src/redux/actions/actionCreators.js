import axios from 'axios';
import actionTypes from './actionTypes';
import tasksUrl from '../../constants/constants';

export function loadTasks() {
  return async (dispatch) => {
    try {
      const { data } = await axios(tasksUrl);
      dispatch({
        type: actionTypes.LOAD_TASKS,
        tasks: data,
      });
    } catch (error) {
      dispatch({
        type: actionTypes.ERROR_TASK,
      });
    }
  };
}

export function addTask(task) {
  return async (dispatch) => {
    try {
      const { data } = await axios.post(tasksUrl, task);
      dispatch({
        type: actionTypes.ADD_TASK,
        task: data,
      });
    } catch (error) {
      dispatch({
        type: actionTypes.ERROR_TASK,
      });
    }
  };
}

export function deleteTask(taskId) {
  return async (dispatch) => {
    try {
      await axios.delete(`${tasksUrl}/${taskId}`);
      dispatch({
        type: actionTypes.DELETE_TASK,
        taskId,
      });
    } catch (error) {
      dispatch({
        type: actionTypes.ERROR_TASK,
      });
    }
  };
}
