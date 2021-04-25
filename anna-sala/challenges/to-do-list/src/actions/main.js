function printNewTask({ task, id }) {
  const taskOnList = document.createElement('li');
  const buttonDone = document.createElement('button');
  const buttonDelete = document.createElement('button');
  const inputTextValue = document.getElementById('taskInput').value;
  const textNode = document.createTextNode(inputTextValue);
  buttonDone.innerHTML = 'Done';
  buttonDelete.innerHTML = 'Delete';
  taskOnList.setAttribute('class', 'task');
  buttonDone.setAttribute('class', 'done');
  buttonDelete.setAttribute('id', `${id}`);
  buttonDelete.onclick = (() => deleteSelectedTask(id));
  buttonDelete.setAttribute('class', 'delete');
  taskOnList.appendChild(textNode);
  taskOnList.appendChild(buttonDone);
  taskOnList.appendChild(buttonDelete);
  document.getElementById('tasks').appendChild(taskOnList);
  inputTextValue.innerHTML = '';
}
