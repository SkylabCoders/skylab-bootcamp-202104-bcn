const createTaskAction = (value) => {
  const addTask = new Promise((resolve, reject) => {
    if (value) {
      resolve({
        type: 'ADD_TASK',
        payload: value
      });
    } else {
      reject({
        type: 'Error',
        payload: 'Enter a valid task!'
      });
    }
  });
  return addTask;
};

deleteTaskAction = (taskToDelete) => {
  const deleteTask = {
    type: 'DELETE_TASK',
    payload: taskToDelete
  };
  reducer(deleteTask);
};

doneTaskAction = (taskToDone) => {
  const taskDone = {
    type: 'DONE_TASK',
    payload: taskToDone
  };
  reducer(taskDone);
};
