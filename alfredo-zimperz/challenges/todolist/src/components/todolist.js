const inputAddTaskTitle = document.querySelector('.addtask__input--title');
const inputAddTaskDescription = document.querySelector('.addtask__input--description');

const newTaskInfo = {
  title: null,
  description: null,
};

updateTaskTitle = () => {
  newTaskInfo.title = event.target.value;
};
updateTaskDescription = () => {
  newTaskInfo.description = event.target.value;
};
addTask = () => {
  store.dispatch(createTask(newTaskInfo));
  newTaskInfo.title = null,
  newTaskInfo.description = null;
  inputAddTaskTitle.value = '';
  inputAddTaskDescription.value = '';
};

store.updateTaskList();
// console.log('hola');
