const createTaskAction = (value) => {
  const addTask = {
    type: 'ADD_TASK',
    payload: value
  };
  dispatch(addTask);
};

const dispatch = (action) => {
  reducer(action);
};
