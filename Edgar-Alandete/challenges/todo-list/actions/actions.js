const getTask = () => (

  {
    type: 'GET_TASK',
  }
);

const getTasksAction = () => ({
  type: 'GET_TASKS',
});

function dispatcher(payLoad) {
  switch (payLoad.type) {
    case 'CREATE_TASK':
      tasksReducer(payLoad);
      break;

    default:

      console.log('no task defined');
      break;
  }
}

// module.exports = { getTask, getTasks };
