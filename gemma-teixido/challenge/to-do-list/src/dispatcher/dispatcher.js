const createTaskAction = (value) => {
  const addTask = {
    type: 'ADD_TASK',
    payload: value
  };
  dispatch(addTask);
};

deleteTaskAction = () => {
  const deleteTask = {
    type: 'DELETE_TASK',
    payload: ''
  };
  dispatch(deleteTask);
};

const dispatch = (action) => {
  reducer(action);
};
