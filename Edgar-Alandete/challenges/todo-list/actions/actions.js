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
    default:

      console.log('no task defined');
      break;
  }
}

// module.exports = { getTask, getTasks };
