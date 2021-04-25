function deleteTask(taskId) {
  const payload = {
    type: 'DELETE_TASK',
    data: taskId,
  };
  return payload;
}

const loadTasks = () => {
  const payload = {
    type: 'LOAD_TASKS',
  };

  return payload;
};
function dispatcher(payLoad) {
  switch (payLoad.type) {
    case 'CREATE_TASK':
      tasksReducer(payLoad.data, payLoad.type);
      break;
    case 'DELETE_TASK':
      tasksReducer(payLoad.data, payLoad.type);
      break;
    case 'LOAD_TASKS':
      tasksReducer(payLoad.data, payLoad.type);
      break;
    case 'UPDATE_TASK':
      tasksReducer(payLoad.data, payLoad.type);
      break;
    case 'ERROR':
      generalReducer(payLoad.data, payLoad.type);
      break;
    default:

      break;
  }
}

// module.exports = { getTask, getTasks };
