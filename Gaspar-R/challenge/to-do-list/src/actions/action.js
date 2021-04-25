// const actionType = require('./actionTypes');
// import ** from "./actionTypes";

const getTask = () => (
  {
    type: actionType.GET_TASK
  }
);

const addTask = (title) => ({
  type: actionType.ADD_TASK,
  data: {
    title,
    complete: false
  }
});

const deleteTask = (taskId) => ({
  type: actionType.DELETE_TASK,
  data: {
    id: taskId
  }
});

const completedTask = (taskId) => ({
  type: actionType.COMPLETED_TASK,
  data:
    {
      id: taskId,
      complete: true
    }
});

// module.exports = {
//   getTask,
//   deleteTask,
//   addTask,
//   completedTask
// };
