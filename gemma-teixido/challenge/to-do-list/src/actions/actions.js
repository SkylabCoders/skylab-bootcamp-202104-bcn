const buttonEnterTasks = () => {
  const dataInput = document.querySelector('.inputTasks');
  createTaskAction(dataInput.value)
    .then((data) => reducer(data))
    .catch((error) => alert(error.payload));
  dataInput.value = '';
};

const buttonTaskDelete = (id) => {
  const taskToDelete = document.querySelector(`.taskID${id}`).textContent;
  deleteTaskAction(taskToDelete);
};

const buttonTaskDone = (id) => {
  const taskToDone = document.querySelector(`.taskID${id}`).textContent;
  doneTaskAction(taskToDone);
};
