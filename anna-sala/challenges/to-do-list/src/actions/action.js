function getInputValue() {
  const inputTextValue = document.getElementById('taskInput').value;
  createTaskAction(inputTextValue)
    .then((data) => dispatch(data))
    .catch((error) => alert(`ERROR: ${error.message}`));
}

function deleteSelectedTask(taskToDelete) {
  deleteTaskAction(taskToDelete)
    .then((data) => dispatch(data))
    .catch((error) => alert(`ERROR: ${error.message}`));
}

function crossSelectedTask(taskToCross) {
  crossTaskAction(taskToCross)
    .then((data) => dispatch(data))
    .catch((error) => alert(`ERROR: ${error.message}`));
}
