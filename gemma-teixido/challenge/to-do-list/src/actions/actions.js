const buttonEnterTasks = () => {
  const dataInput = document.querySelector('.inputTasks');
  createTaskAction(dataInput.value);
  dataInput.value = '';
};

const buttonTaskDelete = (id) => {
  const taskToDelete = document.querySelector(`.taskID${id}`).textContent;
  console.log(taskToDelete);
};
