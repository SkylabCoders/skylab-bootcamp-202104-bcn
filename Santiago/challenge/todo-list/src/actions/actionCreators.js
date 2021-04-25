const taskAdded = () => {
  const addedTask = document.querySelector('#text-input');
  addTaskDispatcher(addedTask.value);
  addedTask.value = '';
};

const taskDeleted = (id) => {
  deleteTaskDispatcher(id);
};

const taskDone = (id) => {
  doneTaskDispatcher(id);
};
