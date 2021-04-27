const addTask = () => {
  const addedTask = document.querySelector('.container__addInput');
  typeAction = ADD_TASK;
  addTaskDispatcher(addedTask.value, typeAction);
  addedTask.value = '';
};

const delTask = (id) => {
  typeAction = DELETE_TASK;
  delTaskDispatcher(id, typeAction);
};

const doneTask = (id) => {
  typeAction = EDIT_TASK;
  doneTaskDispatcher(id, typeAction);
};
