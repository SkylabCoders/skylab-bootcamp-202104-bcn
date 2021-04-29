let idIncrement = 0;

const addTaskDispatcher = (value) => {
  const addTask = {
    type: 'ADD_TASK',
    data: {
      id: idIncrement += 1,
      description: value,
      completed: false
    }
  };
  dispatcher(addTask);
};

const deleteTaskDispatcher = (id) => {
  const deleteTask = {
    type: 'DELETE_TASK',
    data: { id }
  };
  dispatcher(deleteTask);
};

const doneTaskDispatcher = (id) => {
  const doneTask = {
    type: 'DONE_TASK',
    data: { id }
  };
  dispatcher(doneTask);
};

const dispatcher = (action) => {
  myReducer(action);
};
