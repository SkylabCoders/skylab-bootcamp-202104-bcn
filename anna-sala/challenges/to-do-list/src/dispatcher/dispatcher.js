function getTasks(data) {
  const { tasks } = data;
  weekdays = tasks;
  console.log(weekdays);
//   return {
//     type: 'PRINT_TASKS',
//     data: weekdays,
//   };
}
// const deleteTaskAction= () => {
//     const deleteTask
// }

const createTaskAction = (value) => {
  const addTask = new Promise((resolve, reject) => {
    if (value) {
      resolve({
        type: 'CREATE_TASK',
        data: value,
      });
    } else {
      reject({
        type: 'ERROR',
        message: 'Empty Input',
      });
    }
  });
  return addTask;
};

const deleteTaskAction = (value) => {
  console.log(value, 'this is the dispatcher pre promise');
  const removeTask = new Promise((resolve, reject) => {
    if (value) {
      tasks.forEach((task) => {
        if (task === value) {
          resolve({
            type: 'DELETE_TASK',
            data: value,
          });
        }
      });
    } else {
      reject({
        type: 'ERROR',
        message: 'Task Not Found',
      });
    }
  });
  console.log(value, 'this is the dispatcher afterr promise');
  return removeTask;
};

const dispatch = (action) => {
  console.log('off to reducer from dispatcher');
  reducer(action);
};
