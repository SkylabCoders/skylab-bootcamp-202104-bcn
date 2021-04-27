const createTaskAction = (value) => {
  const addTask = new Promise((resolve, reject) => {
    if (value) {
      resolve({
        type: 'CREATE_TASK',
        data: {
          task: value,
          id: lastID,
        },
      });
    } else {
      reject({
        type: 'ERROR',
        message: 'Empty Input',
      });
    }
  });
  return addTask;
};

const deleteTaskAction = (value) => {
  const removeTask = new Promise((resolve, reject) => {
    if (value) {
      resolve({
        type: 'DELETE_TASK',
        data: value,
      });
    } else {
      reject({
        type: 'ERROR',
        message: 'Task Not Found',
      });
    }
  });
  return removeTask;
};
const crossTaskAction = (value) => {
  const crossTask = new Promise((resolve, reject) => {
    if (value) {
      resolve({
        type: 'UPDATE_TASK',
        data: value,
      });
    } else {
      reject({
        type: 'ERROR',
        message: 'Task Not Found',
      });
    }
  });
  return crossTask;
};

const dispatch = (action) => {
  reducer(action);
};
