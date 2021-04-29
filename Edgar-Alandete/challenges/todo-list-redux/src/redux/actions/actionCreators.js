import actionTypes from './actionTypes';

export const loadTasks = () => ({
  type: actionTypes.LOAD_TASKS,
});

export const loadTasksByStatus = (status) => ({
  type: actionTypes.LOAD_TASKS,
  status,
});
