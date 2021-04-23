/* eslint-disable import/extensions */
import { GET_TASKS, DELETE_TASK } from './actionTypes.js';

const getTasks = () => ({
  type: GET_TASKS,
});

const deleteTask = (taskId) => ({
  type: DELETE_TASK,
  taskId,
});

export default { getTasks, deleteTask };
