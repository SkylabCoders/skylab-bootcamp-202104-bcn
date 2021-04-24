const addValueToNewTask = (value) => {
  const addTask = { type: 'ADD_TASK', data: value };
  dispatcherNewTask(addTask);
};

const toCreateTask = () => {
  const dataNewTask = document.querySelector('.form-create__input');
  addValueToNewTask(dataNewTask.value);
  dataNewTask.value = '';
};
