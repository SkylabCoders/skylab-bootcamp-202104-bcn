const createTaskAction = (value) => {
  const addTask = {
    type: 'ADD_TASK',
    data: value
  };
  dispatcher(addTask);
};

const dispatcher = (action) => {
  myReducer(action);
};
