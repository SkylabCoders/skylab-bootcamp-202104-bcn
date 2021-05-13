import axios from 'axios';
import actionTypes from './actionTypes';

const url = 'http://localhost:2400/tasks';

export function loadTasks() {
  return async (dispatch) => {
    try {
      const { data } = await axios(url);
      dispatch({
        type: actionTypes.LOAD_TASKS,
        allTasks: data,
      });
    } catch (error) {
      dispatch({
        type: actionTypes.LOAD_TASKS_ERROR,
      });
    }
  };
}

export function addTask(newTask) {
  return async (dispatch) => {
    const { data } = await axios.post(url, newTask);
    dispatch({
      type: actionTypes.ADD_TASK,
      newTask: data,
    });
  };
}

export function deleteTask(idTask) {
  return async (dispatch) => {
    await axios.delete(`${url}/${idTask}`);
    dispatch({
      type: actionTypes.DELETE_TASK,
      idTask,
    });
  };
}

export function doneTask(idTask) {
  return {
    type: actionTypes.DONE_TASK,
    idTask,
  };
}
