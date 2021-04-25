const taskAdded = () => {
  const addedTask = document.querySelector('#first');
  addTaskDispatcher(addedTask.value);
  addedTask.value = '';
};
