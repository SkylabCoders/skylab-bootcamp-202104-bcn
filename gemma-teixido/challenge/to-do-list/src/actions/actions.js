const buttonEnterTasks = () => {
  const dataInput = document.querySelector('.inputTasks');
  createTaskAction(dataInput.value);
  dataInput.value = '';
};
