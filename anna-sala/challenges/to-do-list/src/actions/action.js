function getInputValue() {
  const inputTextValue = document.getElementById('taskInput').value;
  createTaskAction(inputTextValue)
    .then((data) => dispatch(data))
    .catch((error) => alert(`ERROR: ${error.message}`));
}

function deleteSelectedTask(taskToDelete) {
  // const taskSelectedToDelete = document.getElementById('taskInput');
  deleteTaskAction(taskToDelete)
    .then((data) => dispatch(data))
    .catch((error) => alert(`ERROR: ${error.message}`));
}
