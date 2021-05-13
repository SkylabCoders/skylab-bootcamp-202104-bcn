import axios from 'axios';
import actionTypes from './actionTypes';
import TASKS from '../../constants/tasks.mock';

const URL = 'http://localhost:2021/todoList';

export function loadTasks() {
  return async (dispatch) => {
    const { data } = await axios(URL);
    dispatch({
      type: actionTypes.LOAD_TASKS,
      tasks: data
    });
  };
}

export function addTask(task) {
  return async (dispatch) => {
    const { data } = await axios.post(URL, task);
    dispatch({
      type: actionTypes.ADD_TASK,
      task: data
    });
  };
}

export function deleteTask(taskId) {
  return async (dispatch) => {
    await axios.delete(`${URL}/${taskId}`);
    dispatch({
      type: actionTypes.DELETE_TASK,
      taskId
    });
  };
}

export function updateTask(task) {
  return {
    type: actionTypes.UPDATE_TASK,
    task
  };
}

export function getTaskById(taskId) {
  let task;
  const targetTask = TASKS.find((current) => current.id === +taskId);
  if (targetTask) { task = targetTask; } else { (task = {}); }

  return {
    type: actionTypes.LOAD_TASK,
    task
  };
}
