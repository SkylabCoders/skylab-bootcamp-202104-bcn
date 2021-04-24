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

const showEditInput = (id) => {
  const result = {
    type: SHOW_EDIT_TASK_BUTTON,
    payload: id,
  };

  return result;
};

// const editTask = (newContent) => {
//   const result = {
//     type: UPDATE_TASK,
//     payload: newContent,
//   };
//   return result;
// };

const deleteTask = (taskToDelete) => {
  const result = {
    type: DELETE_TASK,
    payload: taskToDelete,
  };
  return result;
};
