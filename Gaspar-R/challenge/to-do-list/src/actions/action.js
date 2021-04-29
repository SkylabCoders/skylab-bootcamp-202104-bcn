// const actionType = require('./actionTypes');
// import ** from "./actionTypes";

const resolvePromise = true;

const getTask = () => (
  {
    type: actionType.GET_TASK
  }
);

const addTask = (title) => new Promise((resolve, reject) => {
  if (title) {
    setTimeout(() => {
      resolve({
        type: actionType.ADD_TASK,
        data: {
          title,
          complete: false
        }
      });
    }, 1000);
  } else {
    reject({
      type: 'ERROR',
      message: 'An error has occurred, task was not created'
    });
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
