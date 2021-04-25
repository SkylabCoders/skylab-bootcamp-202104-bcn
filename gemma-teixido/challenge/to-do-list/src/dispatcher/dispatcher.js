const createTaskAction = (value) => {
  const addTask = {
    type: 'ADD_TASK',
    payload: value
  };
  reducer(addTask);
};

deleteTaskAction = (arrayOfTasks) => {
  const deleteTask = {
    type: 'DELETE_TASK',
    payload: arrayOfTasks
  };
  reducer(deleteTask);
};
