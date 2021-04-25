const taskAdded = () => {
  const addedTask = document.querySelector('#first');
  addTaskDispatcher(addedTask.value);
  addedTask.value = '';
};

const taskDeleted = (id) => {
  deleteTaskDispatcher(id);
};

const taskDone = (id) => {
  doneTaskDispatcher(id);
};
