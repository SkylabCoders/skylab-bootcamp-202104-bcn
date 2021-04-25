function fetchTaskJson(callback) {
  return fetch('../store/tasks.json')
    .then((response) => response.json())
    .then((data) => callback(data))
    .catch((error) => console.error(error));
}

function getInputValue() {
  const inputTextValue = document.getElementById('taskInput').value;
  console.log(inputTextValue);
  createTaskAction(inputTextValue);
}
