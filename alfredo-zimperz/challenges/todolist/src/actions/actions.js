// const actionTypes = require('./actionTypes');
import { GET_TASKS, DELETE_TASK } from './actionTypes';

const getTasks = () => ({
  type: GET_TASKS,
});

const deleteTask = (taskId) => ({
  type: DELETE_TASK,
  taskId,
});

// module.exports = {
//   getTasks,
//   deleteTask,
// };
export { getTasks, deleteTask };
