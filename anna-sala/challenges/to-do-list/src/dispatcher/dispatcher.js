function getTasks(data) {
  const { tasks } = data;
  weekdays = tasks;
  console.log(weekdays);
//   return {
//     type: 'PRINT_TASKS',
//     data: weekdays,
//   };
}

const createTaskAction = (value) => {
  const addTask = {
    type: 'CREATE_TASK',
    data: value,
  };
  console.log('inside dispatcher', addTask);
  dispatch(addTask);
};

const dispatch = (action) => {
  console.log('off to reducer from dispatcher');
  reducer(action);
};
