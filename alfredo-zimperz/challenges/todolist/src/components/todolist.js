const inputAddTaskTitle = document.querySelector('.addtask__input--title');
const inputAddTaskDescription = document.querySelector('.addtask__input--description');

const newTaskInfo = {
  title: null,
  description: null,
  id: null,
};

const updateTaskTitle = () => {
  newTaskInfo.title = event.target.value;
};
const updateTaskDescription = () => {
  newTaskInfo.description = event.target.value;
};

const saveTask = () => {
  console.log(newTaskInfo);
  if (newTaskInfo.id === null) {
    store.dispatch(createTask(newTaskInfo));
    console.log(store.tasks);
  } else {
    store.dispatch(modifyTask({ ...newTaskInfo }));
  }
  newTaskInfo.title = null,
  newTaskInfo.description = null;
  newTaskInfo.id = null;
  inputAddTaskTitle.value = '';
  inputAddTaskDescription.value = '';
};

const handleModify = (id) => {
  const taskToModify = store.tasks.find((task) => task.id === id);
  inputAddTaskTitle.value = taskToModify.title;
  inputAddTaskDescription.value = taskToModify.description;
  newTaskInfo.title = taskToModify.title;
  newTaskInfo.description = taskToModify.description;
  newTaskInfo.id = taskToModify.id;
};

store.updateTaskList();
// console.log('hola');
