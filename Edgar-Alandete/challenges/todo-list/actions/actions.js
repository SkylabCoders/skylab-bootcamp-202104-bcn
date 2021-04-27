const deleteTask = (taskId) => {
  const payload = {
    type: 'DELETE_TASK',
    data: taskId,
  };
  return payload;
};

const createTask = (taskToCreate) => {
  const payload = { type: 'CREATE_TASK', data: taskToCreate };
  return payload;
};

const loadTasks = () => {
  const payload = {
    type: 'LOAD_TASKS',
  };

  return payload;
};

const updateTask = (taskId) => {
  const payload = {
    type: 'UPDATE_TASK',
    data: taskId,
  };
  return payload;
};

const createError = () => {
  const payload = { type: 'ERROR', data: 'NO SE PUEDE CREAR LA TAREA' };
  return payload;
};
