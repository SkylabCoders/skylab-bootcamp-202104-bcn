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
  const taskList = document.querySelector('.task-list');
  taskList.innerHTML = '';

  tasks.forEach(({ taskId, value, isFinished }) => {
    const newTask = createDomElement(taskList, 'li', '', { id: taskId, class: 'task-list__element element' });
    const taskNote = createDomElement(newTask, 'p', value);
    const buttonDelete = createDomElement(newTask, 'button', 'Delete', { class: 'element__button element__button--delete' });
    buttonDelete.onclick = (() => deleteTask(taskId));
    const buttonUpdate = createDomElement(newTask, 'button', 'Done', { class: 'element__button element__button--done' });
    buttonUpdate.onclick = (() => updateTask(taskId));

    if (isFinished) {
      taskNote.classList.add('done');
      buttonUpdate.setAttribute('disabled', 'disabled');
    }
  });
}

const createTask = () => {
  const task = document.getElementById('new-task');
  const taskToCreate = { taskId: '', value: task.value, isFinished: false };

  const taskPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (taskToCreate.value) {
        resolve({ type: 'CREATE_TASK', data: taskToCreate });
      } else {
        reject({ type: 'ERROR', data: 'NO SE PUEDE CREAR LA TAREA' });
      }
    }, 3000);
  });
  taskPromise.then((newTask) => dispatcher(newTask)).catch((error) => dispatcher(error));
};

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

function updateTask(taskId) {
  debugger;
  const payload = {
    type: 'UPDATE_TASK',
    data: taskId,
  };
  dispatcher(payload);
}

function clearInput() {
  const task = document.getElementById('new-task');
  task.value = '';
}

function drawError(error) {
  alert(error);
}
