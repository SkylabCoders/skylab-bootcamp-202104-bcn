// import TODOS from '../../Constants/todolist';
import actionTypes from './actionTypes';

export const addTask = (newTask) => ({
  type: actionTypes.ADD_TASK,
  task: newTask,
});

export const deleteTask = (taskId) => ({
  type: actionTypes.DELETE_TASK,
  task: taskId,
});

export const updateTasks = () => ({
  type: actionTypes.UPDATE_TASKS,
});

export const loadTasks = () => ({
  type: actionTypes.UPDATE_TASKS,
});

export const editTask = (newTask) => ({
  type: actionTypes.EDIT_TASK,
  task: newTask,
});

export const deleteSeveralTasks = (tasksIdsArray) => ({
  type: actionTypes.DELETE_SEVERAL_TASKS,
  task: tasksIdsArray,
});
