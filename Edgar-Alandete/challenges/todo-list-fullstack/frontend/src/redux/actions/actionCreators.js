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

export const createTask = (task) => async (dispatch) => {
  const newTask = { ...task, isFinished: false };
  try {
    await axios.post(url, newTask);
    dispatch({
      type: actionTypes.ADD_TASK,
      task: newTask,
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

export const updateTask = (task) => ({
  type: actionTypes.UPDATE_TASK,
  task,
});
