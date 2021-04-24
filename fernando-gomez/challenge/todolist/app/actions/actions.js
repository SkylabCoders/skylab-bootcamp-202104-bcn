const createTask = (newTask) => {
  const result = {
    type: CREATE_TASK,
    payload: newTask,
  };
  return result;
};

const readTask = (taskToRead) => {
  const result = {
    type: READ_TASK,
    payload: taskToRead,
  };
  return result;
};

const updateTask = (newContent) => {
  const result = {
    type: UPDATE_TASK,
    payload: newContent,
  };
  return result;
};

const deleteTask = (taskToDelete) => {
  const result = {
    type: DELETE_TASK,
    payload: taskToDelete,
  };
  return result;
};
