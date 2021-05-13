import axios from 'axios';
import actionTypes from './actionTypes';

const URL = 'http://localhost:2021/tasks';

export function loadTasks(url = URL) {
  return async (dispacth) => {
    try {
      const { data } = await axios.get(url);
      dispacth({
        type: actionTypes.LOAD_TASKS,
        tasks: data
      });
    } catch (error) {
      dispacth({
        type: 'LOAD_HEROES_ERROR'
      });
    }
  };
}

export function addTask(task) {
  return async (dispacth) => {
    const { data } = await axios.post(URL, task);
    dispacth({
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
