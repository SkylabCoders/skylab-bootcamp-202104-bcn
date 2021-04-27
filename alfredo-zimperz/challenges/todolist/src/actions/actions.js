const LA_PROGRAMACION_MOLA = true;

const getTasks = () => store.dispatch(
  { type: GET_TASKS },
);

const deleteTask = (taskId) => store.dispatch(
  { type: DELETE_TASK, taskId },
);

const createTask = (taskData) => new Promise((resolve, reject) => {
  const { title } = taskData;
  const { description } = taskData;
  if (LA_PROGRAMACION_MOLA === true) {
    setTimeout(() => {
      resolve({ type: CREATE_TASK, taskData: { title, description, id: null } });
    }, 2000);
  } else {
    reject({
      type: 'ERROR',
      message: 'La programación no mola',
    });
  }
});

const modifyTask = (taskData) => store.dispatch(
  { type: MODIFY_TASK, taskData },
);

const tootleTaskState = (taskId) => store.dispatch(
  { type: TOOGLE_TASK_STATE, taskId },
);
