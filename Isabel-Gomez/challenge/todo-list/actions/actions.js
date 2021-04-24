const addValueToNewTask = (value) => {
  const addTask = { type: 'ADD_TASK', data: value };
  dispatcher(addTask);
};

const toCreateTask = () => {
  const dataNewTask = document.querySelector('.form-create__input');
  addValueToNewTask(dataNewTask.value);
  dataNewTask.value = '';
};

const getIdtoDeleteTask = (id) => {
  const deleteTask = { type: 'DELETE_TASK', data: id };
  dispatcher(deleteTask);
};

const toDeleteTask = () => {
  const dataDeleteTask = document.querySelector('.container-buttons__delete');
  getIdtoDeleteTask(dataDeleteTask.id);
};
