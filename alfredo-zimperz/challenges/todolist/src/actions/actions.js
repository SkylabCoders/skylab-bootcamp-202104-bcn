const getTasks = () => ({
  type: GET_TASKS,
});

const deleteTask = (taskId) => ({
  type: DELETE_TASK,
  taskId,
});

const createTask = (taskData) => ({
  type: CREATE_TASK,
  taskData,
});
