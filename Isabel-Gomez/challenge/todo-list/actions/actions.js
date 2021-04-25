let indexDataBase = 0;

const addDataToNewTask = (id, value) => {
  const addTask = {
    type: 'ADD_TASK',
    data: {
      id, value, completed: false,
    },
  };
  console.log('id', addTask.data.id);
  dispatcher(addTask);
};

const getInfoToCreateTask = () => {
  const dataNewTask = document.querySelector('.form-create__input');
  addDataToNewTask(indexDataBase, dataNewTask.value);
  indexDataBase++;
  dataNewTask.value = '';
};

const getIdtoDeleteTask = (id) => {
  const deleteTask = { type: 'DELETE_TASK', data: id };
  console.log('actiondeleteTask in action', deleteTask);
  dispatcher(deleteTask);
};

const getIdtoFinishedTask = (id) => {
  const finishedTask = { type: 'FINISH_TASK', data: id };
  dispatcher(finishedTask);
};

const getIdtoEditTask = (id) => {
  const editedTask = { type: 'EDIT_TASK', data: id };
  dispatcher(editedTask);
};
