function getTasks() {
  console.log('in get tasks');
}

function createDomElement(parent, element, text = null, attributes = []) {
  const elementToCreate = document.createElement(element);
  if (text) {
    elementToCreate.innerText = text;
  }

  if (attributes) {
    Object.entries(attributes).map(([attrubute, value]) => {
      elementToCreate.setAttribute(attrubute, value);
    });
  }
  parent.appendChild(elementToCreate);
  return elementToCreate;
}

function drawTodoList(tasks) {
  const taskList = document.getElementById('todo-list');
  taskList.innerHTML = '';

  tasks.forEach(({ taskId, value }) => {
    const newTask = createDomElement(taskList, 'div', value, { id: taskId });
    const buttonDelete = createDomElement(newTask, 'button', 'Delete');
    buttonDelete.onclick = (() => deleteTask(taskId));

    createDomElement(newTask, 'button', 'Update');
  });
}

function createTask() {
  const task = document.getElementById('new-task');
  const taskToCreate = { taskId: '', value: task.value };
  const payLoad = {
    type: 'CREATE_TASK',
    data: taskToCreate,
  };
  dispatcher(payLoad);
}

function deleteTask(taskId) {
  const payload = {
    type: 'DELETE_TASK',
    data: taskId,
  };
  dispatcher(payload);
}

function loadTasks() {
  const payload = {
    type: 'LOAD_TASKS',
  };
  dispatcher(payload);
}
