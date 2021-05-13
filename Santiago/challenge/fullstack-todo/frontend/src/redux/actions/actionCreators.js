import axios from 'axios';
import actionTypes from './actionTypes';

const URL = 'http://localhost:2021/tasks';

export function loadTasks(url = URL) {
  return async (dispacth) => {
    const { data } = await axios.get(url);
    dispacth({
      type: actionTypes.LOAD_TASKS,
      tasks: data
    });
  };
}

export function addTask(newTask) {
  return {
    type: actionTypes.ADD_TASK,
    newTask
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
