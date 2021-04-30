import actionTypes from './actionTypes';

export const loadTasks = () => ({
  type: actionTypes.LOAD_TASKS,
});

export const loadTasksByStatus = (status) => ({
  type: actionTypes.LOAD_TASKS,
  status,
});

export const updateTask = (task) => ({
  type: actionTypes.UPDATE_TASK,
  task,
});

export const deleteTask = (taskId) => ({
  type: actionTypes.DELETE_TASK,
  taskId,
});

export const createTask = (task) => ({
  type: actionTypes.ADD_TASK,
  task,
});
