function getTasks() {
  console.log('in get tasks');
}

function drawTodoList() {
  console.log('Reload from store');
}

function createTask() {
  const taskToCreate = 'Created task';
  const payLoad = {
    type: 'CREATE_TASK',
    data: taskToCreate,
  };
  dispatcher(payLoad);
}
