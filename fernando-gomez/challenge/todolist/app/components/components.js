const tasksList = document.querySelector('.tasksList');
const nextTaskButton = document.querySelector('.new-task-button');
const tasksInput = document.querySelector('.tasksInput');

const printTask = (taskObject) => {
  const taskListElement = document.createElement('li');
  const deleteButton = document.createElement('button');
  deleteButton.classList = 'delete-task-button';
  deleteButton.innerText = 'X';
  deleteButton.setAttribute('onclick', `handleDelete(${taskObject.id})`);
  taskListElement.innerText = `Task: ${taskObject.id} -> ${taskObject.description}`;
  tasksList.appendChild(taskListElement);
  taskListElement.appendChild(deleteButton);
};

const removeAllChildNodes = (parent) => {
  while (parent.firstChild) {
    parent.removeChild(parent.firstChild);
  }
};

const updateTaskList = () => {
  removeAllChildNodes(tasksList);
  store.allTasksDB.forEach((task) => printTask(task));
};

updateTaskList();
