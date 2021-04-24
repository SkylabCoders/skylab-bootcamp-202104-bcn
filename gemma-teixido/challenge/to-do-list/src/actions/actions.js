const buttonEnterTasks = () => {
  const dataInput = document.querySelector('.inputTasks');
  createTaskAction(dataInput.value);
  dataInput.value = '';
};

const buttonTaskDelete = () => {
  const buttonTaskDelete = document.querySelector('.buttonTaskDelete');
  deleteTaskAction(buttonTaskDelete);
};
