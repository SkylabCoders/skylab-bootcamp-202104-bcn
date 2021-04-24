const tasksList = document.querySelector('.tasksList');

const deleteButton = (taskObject) => {
  const deleteTaskButton = document.createElement('button');
  deleteTaskButton.classList = 'delete-task-button';
  deleteTaskButton.innerText = 'X';
  deleteTaskButton.setAttribute('onclick', `handleDelete(${taskObject.id})`);

  return deleteTaskButton;
};

const editionDoneButton = () => {
  const doneButton = document.createElement('button');
  doneButton.classList = 'submit-edit-button';
  doneButton.innerText = 'Done';
  return doneButton;
};

const editTaskButton = (taskObject) => {
  const editButton = document.createElement('button');
  editButton.classList = 'edit-button';
  editButton.innerText = 'Edit';
  editButton.setAttribute('onclick', `handleShowEditInput(${taskObject.id})`);
  return editButton;
};

const printTask = (taskObject) => {
  const taskListElement = document.createElement('li');
  const deleteTaskButton = deleteButton(taskObject);
  const editButton = editTaskButton(taskObject);
  taskListElement.innerText = `Task: ${taskObject.id} -> ${taskObject.description}`;
  tasksList.appendChild(taskListElement);
  taskListElement.appendChild(deleteTaskButton);
  taskListElement.appendChild(editButton);
};

const printTaskWithEditInput = (taskObject) => {
  const taskListElement = document.createElement('li');
  const deleteTaskButton = deleteButton(taskObject);
  const input = document.createElement('input');
  input.setAttribute('value', `${taskObject.description}`);
  const doneButton = editionDoneButton();
  doneButton.setAttribute('onclick', `handleEdite(${taskObject.id}, ${input.value})`);
  taskListElement.innerText = `Task: ${taskObject.id} -> ${taskObject.description}`;
  tasksList.appendChild(taskListElement);
  taskListElement.appendChild(deleteTaskButton);
  taskListElement.appendChild(input);
  taskListElement.appendChild(doneButton);
};

const removeAllChildNodes = (parent) => {
  while (parent.firstChild) {
    parent.removeChild(parent.firstChild);
  }
};

const updateTaskList = () => {
  removeAllChildNodes(tasksList);
  store.allTasksDB.forEach((task) => {
    if (task.id !== store.editButtonOpened) {
      printTask(task);
    } else {
      printTaskWithEditInput(task);
    }
  });
};

updateTaskList();
