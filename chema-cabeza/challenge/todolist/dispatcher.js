createNewTask = (value) => {
  const newTask = {
    type: 'ADD_TASK',
    data: value,
  };
  dispatch(newTask);
};

deleteTask = (value) => {
  const newTask = {
    type: 'DELETE_TASK',
    data: value,
  };
  dispatch(newTask);
};

const dispatch = (action) => {
  reducer(action);
};
