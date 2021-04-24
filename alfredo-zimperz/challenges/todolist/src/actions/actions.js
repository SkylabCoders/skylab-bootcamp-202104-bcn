const getTasks = () => store.dispatch(
  { type: GET_TASKS },
);

const deleteTask = (taskId) => store.dispatch(
  { type: DELETE_TASK, taskId },
);

const createTask = (taskData) => store.dispatch(
  { type: CREATE_TASK, taskData },
);

const modifyTask = (taskData) => store.dispatch(
  { type: MODIFY_TASK, taskData },
);

const tootleTaskState = (taskId) => store.dispatch(
  { type: TOOGLE_TASK_STATE, taskId },
);
