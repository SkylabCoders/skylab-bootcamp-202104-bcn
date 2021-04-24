const getTask = () => (

  {
    type: 'GET_TASK',
  }
);

const getTasksAction = () => ({
  type: 'GET_TASKS',
});

function createTaskAction() {
  const task = document.getElementById('new-task');
  const taskToCreate = { taskId: '', value: task.value };
  const payLoad = {
    type: 'CREATE_TASK',
    data: taskToCreate,
  };
  dispatcher(payLoad);
}

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
