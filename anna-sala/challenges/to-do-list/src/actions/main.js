// function fetchTaskJson(callback) {
//   return fetch('../store/tasks.json')
//     .then((response) => response.json())
//     .then((data) => callback(data))
//     .catch((error) => console.error(error));
// }
// function getTasksID(data) {
//   const { tasks } = data;
//   weekdays = tasks;
//   console.log(weekdays);
//   return {
//     type: 'PRINT_TASKS',
//     data: weekdays,
//   };
// }

function printNewTask() {
  const taskOnList = document.createElement('li');
  const buttonDone = document.createElement('button');
  const buttonDelete = document.createElement('button');
  const inputTextValue = document.getElementById('taskInput').value;
  const textNode = document.createTextNode(inputTextValue);
  buttonDone.innerHTML = 'Done';
  buttonDelete.innerHTML = 'Delete';
  taskOnList.setAttribute('class', 'task');
  buttonDone.setAttribute('class', 'done');
  buttonDelete.setAttribute('id', `${inputTextValue}`);
  buttonDelete.onclick = (() => deleteSelectedTask(inputTextValue));
  buttonDelete.setAttribute('class', 'delete');
  taskOnList.appendChild(textNode);
  taskOnList.appendChild(buttonDone);
  taskOnList.appendChild(buttonDelete);
  if (inputTextValue === '') {
    document.getElementById('taskInput').style.border = 'red';
  } else {
    document.getElementById('tasks').appendChild(taskOnList);
  }
  inputTextValue.value = '';
}
