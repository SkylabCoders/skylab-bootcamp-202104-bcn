let buttonDone;
let buttonDelete;

function createbuttons() {
  buttonDone = document.createElement('button');
  buttonDelete = document.createElement('button');
  buttonDone.innerHTML = 'Done';
  buttonDelete.innerHTML = 'Delete';
  buttonDone.setAttribute('class', 'done');
  buttonDelete.setAttribute('class', 'delete');
}

function printNewTask({ id }) {
  const taskOnList = document.createElement('li');
  createbuttons();
  const inputTextValue = document.getElementById('taskInput').value;
  const textNode = document.createTextNode(inputTextValue);
  taskOnList.setAttribute('class', 'task');
  taskOnList.setAttribute('id', `${id}`);
  buttonDelete.onclick = (() => deleteSelectedTask(id));
  buttonDone.onclick = (() => crossSelectedTask(id));
  taskOnList.appendChild(textNode);
  taskOnList.appendChild(buttonDone);
  taskOnList.appendChild(buttonDelete);
  document.getElementById('tasks').appendChild(taskOnList);
}

function deleteItem(id) {
  document.getElementById(`${id}`).remove();
}
function crossTaskText(id) {
  document.getElementById(`${id}`).className = 'crossed';

//   document.getElementById(`${id}`).innerHTML = taskText.strike();
}
