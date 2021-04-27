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
    buttonDelete.onclick = (() => handleDelete(taskId));
    const buttonUpdate = createDomElement(newTask, 'button', 'Done', { class: 'element__button element__button--done' });
    buttonUpdate.onclick = (() => handleUpdate(taskId));

    if (isFinished) {
      taskNote.classList.add('done');
      buttonUpdate.setAttribute('disabled', 'disabled');
    }
  });
}

const handleCreateTask = () => {
  const task = document.getElementById('new-task');
  const taskToCreate = { taskId: '', value: task.value, isFinished: false };

  const createAction = createTask(taskToCreate);

  const taskPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (taskToCreate.value) {
        resolve(createTask(taskToCreate));
      } else {
        reject(createError());
      }
    }, 3000);
  });
  taskPromise.then((newTask) => dispatcher(newTask)).catch((error) => dispatcher(error));
};

const handleDelete = (id) => {
  const deleteAction = deleteTask(id);
  dispatcher(deleteAction);
};

const handleLoadTasks = () => {
  const tasksLoaded = loadTasks();
  dispatcher(tasksLoaded);
};

const handleUpdate = (taskId) => {
  const taskToUpdate = updateTask(taskId);
  dispatcher(taskToUpdate);
};

const clearInput = () => {
  const task = document.getElementById('new-task');
  task.value = '';
};

function drawError(error) {
  alert(error);
}
