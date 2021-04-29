/* eslint-disable no-restricted-globals */
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
const tasksList = document.querySelector('.tasksList');
const tasksInput = document.querySelector('.tasksInput');
let editorInput = '';

const deleteButton = (taskObject) => {
  const deleteTaskButton = document.createElement('button');
  deleteTaskButton.classList = 'delete-task-button';
  deleteTaskButton.innerText = 'X';
  deleteTaskButton.setAttribute('onclick', `handleDelete(${taskObject.id})`);
  return deleteTaskButton;
};

const taskCompletedButton = (id) => {
  const completedButton = document.createElement('button');
  completedButton.classList = 'completed-button';
  completedButton.innerText = '✔︎';
  completedButton.setAttribute('onclick', `handleCompleted(${id})`);
  return completedButton;
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

const handleKeyUp = () => {
  editorInput = (event.target.value);
};

const printTask = (taskObject) => {
  const taskListElement = document.createElement('li');
  const deleteTaskButton = deleteButton(taskObject);
  const editButton = editTaskButton(taskObject);
  const taskCompleted = taskCompletedButton(taskObject.id);
  const input = document.createElement('input');
  const doneButton = editionDoneButton();
  const buttonContainer = document.createElement('div');
  buttonContainer.classList = 'tasks-button-container';
  taskListElement.classList = 'task';

  if (taskObject.id !== store.editButtonOpened) {
    taskListElement.innerText = `Task ${taskObject.id} -> ${taskObject.description}`;
    buttonContainer.appendChild(deleteTaskButton);
    taskListElement.appendChild(buttonContainer);
    tasksList.appendChild(taskListElement);

    if (taskObject.status === 'done') {
      taskListElement.style = 'color: green';
    } else {
      buttonContainer.appendChild(taskCompleted);
      buttonContainer.appendChild(editButton);
    }
  } else {
    input.setAttribute('value', `${taskObject.description}`);
    input.setAttribute('onkeyup', 'handleKeyUp()');
    doneButton.setAttribute('onclick', `handleEdit(${taskObject.id})`);
    taskListElement.innerText = `Task: ${taskObject.id} -> ${taskObject.description}`;
    tasksList.appendChild(taskListElement);
    buttonContainer.appendChild(deleteTaskButton);
    buttonContainer.appendChild(input);
    taskListElement.appendChild(buttonContainer);
    buttonContainer.appendChild(doneButton);
    tasksList.appendChild(taskListElement);
  }
};

const removeAllChildNodes = (parent) => {
  while (parent.firstChild) {
    parent.removeChild(parent.firstChild);
  }
};

const updateTaskList = () => {
  removeAllChildNodes(tasksList);
  store.allTasksDB.forEach((task) => {
    printTask(task);
  });
};

window.addEventListener('keydown', (event) => {
  if (event.code === 'Enter') {
    handleCreate();
  }
});

updateTaskList();
