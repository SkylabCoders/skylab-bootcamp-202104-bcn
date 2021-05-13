import shortId from 'shortid';
import actionTypes from './actionTypes';
import TASKS from '../../constants/tasks.mock';

export function loadTasks() {
  return {
    type: actionTypes.LOAD_TASKS
  };
}

export function addTask(task) {
  const id = shortId.generate();
  return {
    type: actionTypes.ADD_TASK,
    task: { id, ...task, done: false }
  };
}

export function deleteTask(taskId) {
  return {
    type: actionTypes.DELETE_TASK,
    taskId
  };
}

export function updateTask(task) {
  return {
    type: actionTypes.UPDATE_TASK,
    task
  };
}
export function loadTask(task) {
  return {
    type: actionTypes.LOAD_TASK,
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
