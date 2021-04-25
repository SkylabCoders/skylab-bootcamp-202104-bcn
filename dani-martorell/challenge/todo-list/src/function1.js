const input = document.querySelector('.input-field');
const btn = document.querySelector('.btn');
const createItem = ({ task, id }, parent) => {
  const li = document.createElement('li');
  li.className = 'tasks__list-item';
  li.setAttribute('id', id);
  const p = document.createElement('p');
  p.textContent = task;

  const deleteButton = document.createElement('a');
  const editButton = document.createElement('a');
  const editInput = document.createElement('input');

  deleteButton.textContent = 'X';
  deleteButton.classList.add('task-button', 'task-button__delete');
  deleteButton.setAttribute('role', 'button');
  deleteButton.setAttribute('onclick', 'removeTask(this.parentElement.id)');

  editButton.textContent = 'Edit';
  editButton.classList.add('task-button', 'task-button__edit');
  editButton.setAttribute('role', 'button');
  editButton.setAttribute('onclick', 'editTask(this.parentElement.firstChild.textContent, this.parentElement)');

  editInput.classList.add('edit-input');
  editInput.setAttribute('type', 'text');
  editInput.setAttribute('autofocus', 'true');
  editInput.setAttribute('autocomplete', 'off');
  const editBoxInputBtn = document.createElement('a');
  editBoxInputBtn.classList.add('task-button', 'task-button__editOk');
  editBoxInputBtn.textContent = 'Done';
  li.append(editInput);
  li.append(p);
  li.append(editButton);
  li.append(deleteButton);
  li.append(editBoxInputBtn);

  parent.append(li);
};
const renderList = (list) => {
  const ul = document.querySelector('.tasks__list');
  ul.innerHTML = '';
  list.forEach((task) => createItem(task, ul));
};

const addTaskToStore = ({ task, id }) => {
  state.toDoList.push({ task, id });
  state.lastId = id;
  renderList(state.toDoList);
};

const removeTaskFromStore = (id) => {
  const list = state.toDoList;
  const index = list.findIndex((element) => element.id === +id);
  list.splice(index, 1);
  renderList(state.toDoList);
};

const editTaskFromStore = (({ task, htmlElement }) => {
  const list = state.toDoList;
  const index = list.findIndex((element) => element === task);
  const main = document.querySelector('.main-content');
  const editBox = document.createElement('div');
  editBox.classList.add('editBox');
  const editBoxInput = document.createElement('input');
  editBoxInput.classList.add('editBox__input');
  editBoxInput.setAttribute('type', 'text');
  editBoxInput.setAttribute('autofocus', 'true');
  editBoxInput.setAttribute('autocomplete', 'off');
  const editBoxInputBtn = document.createElement('a');
  editBoxInputBtn.classList.add('task-button', 'task-button__editOk');
  editBoxInputBtn.textContent = 'Done';
  editBox.append(editBoxInput);
  editBox.append(editBoxInputBtn);
  htmlElement.append(editBox);
});

const reducer = ({ type, data }) => {
  switch (type) {
    case 'ADD_TASK':
      addTaskToStore(data);
      break;

    case 'REMOVE_TASK':
      removeTaskFromStore(data);
      break;

    case 'EDIT_TASK':
      editTaskFromStore(data);
      break;

    default:
      break;
  }
};
const addTask = (task) => reducer({
  type: 'ADD_TASK',
  data: {
    task,
    id: state.lastId + 1,
  },
});
const removeTask = (id) => reducer({
  type: 'REMOVE_TASK',
  data: id,
});

const editTask = (task, htmlElement) => reducer({
  type: 'EDIT_TASK',
  data: { task, htmlElement },
});

window.onload = renderList(state.toDoList);
