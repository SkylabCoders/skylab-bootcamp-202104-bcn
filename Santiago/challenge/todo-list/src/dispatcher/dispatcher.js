const addTaskDispatcher = (value) => {
  const addTask = {
    type: 'ADD_TASK',
    data: { description: value }
  };
  dispatcher(addTask);
};

const dispatcher = (action) => {
  myReducer(action);
};
