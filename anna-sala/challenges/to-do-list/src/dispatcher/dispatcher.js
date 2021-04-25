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
//   const addTask = {
//     type: 'CREATE_TASK',
//     // hago fetch para chequear id y añado el valor en value como objeto.
//     data: value,
//   };
//   console.log('inside dispatcher', addTask);
//   return addTask;
// };

const dispatch = (action) => {
  console.log('off to reducer from dispatcher');
  reducer(action);
};
