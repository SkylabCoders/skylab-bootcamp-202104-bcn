function getInputValue() {
  const inputTextValue = document.getElementById('taskInput').value;
  console.log(inputTextValue);
  createTaskAction(inputTextValue).then((data) => dispatch(data)).catch((error) => alert(`ERROR: ${error.message}`));
}

function deleteSelectedTask(taskToDelete) {
  // const taskSelectedToDelete = document.getElementById('taskInput');
  console.log('we are deleting ', taskToDelete);
  deleteTaskAction(taskToDelete).then((data) => dispatch(data)).catch((error) => alert(`ERROR: ${error.message}`));
}
