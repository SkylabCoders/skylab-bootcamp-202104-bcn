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
const handleDelete = (id) => {
  deleteTask(id);
};

const handleComplete = (id) => {
  tootleTaskState(id);
};

const handleModify = (id) => {
  const taskToModify = store.tasks.find((task) => task.id === id);
  inputAddTaskTitle.value = taskToModify.title;
  inputAddTaskDescription.value = taskToModify.description;
  newTaskInfo.title = taskToModify.title;
  newTaskInfo.description = taskToModify.description;
  newTaskInfo.id = taskToModify.id;
};

const saveTask = () => {
  if (newTaskInfo.id === null) {
    createTask(newTaskInfo);
  } else {
    modifyTask({ ...newTaskInfo });
  }
  newTaskInfo.title = null,
  newTaskInfo.description = null;
  newTaskInfo.id = null;
  inputAddTaskTitle.value = '';
  inputAddTaskDescription.value = '';
};

const updateTaskList = () => {
  tasklist.innerHTML = '';
  store.tasks.forEach((task) => {
    createTaskListItem(
      task.id, task.title, task.description, task.done, tasklist, handleDelete,
    );
  });
};

updateTaskList();
