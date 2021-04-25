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
  const editBoxInputBtn = document.createElement('a');

  deleteButton.textContent = 'X';
  deleteButton.classList.add('task-button', 'task-button__delete');
  deleteButton.setAttribute('role', 'button');
  deleteButton.setAttribute('onclick', 'removeTask(this.parentElement.id)');

  editButton.textContent = 'Edit';
  editButton.classList.add('task-button', 'task-button__edit');
  editButton.setAttribute('role', 'button');
  editButton.setAttribute('onclick', 'handleEdit(this.parentElement)');

  editInput.classList.add('edit-input');
  editInput.setAttribute('type', 'text');
  editInput.setAttribute('autofocus', 'true');
  editInput.setAttribute('autocomplete', 'off');

  editBoxInputBtn.textContent = 'Done';
  editBoxInputBtn.classList.add('task-button', 'task-button__editOk');

  // CUANDO PINCHE EDIT ARRANCAR LOGICA DE CAMBIO EStiLO PARA QUE APAREZCA BOTON.

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

const modifyEditElement = (htmlElement) => {
  const button = htmlElement.lastElementChild;
  const inputField = htmlElement.firstElementChild;
  button.classList.add('task-button__editOk--visible');
  inputField.classList.add('edit-input--visible');
  state.editedElement = htmlElement;
  // const index = list.findIndex((element) => element.id === +id);
  // const main = document.querySelector('.main-content');
};

const reducer = ({ type, data }) => {
  switch (type) {
    case 'ADD_TASK':
      addTaskToStore(data);
      break;

    case 'REMOVE_TASK':
      removeTaskFromStore(data);
      break;

    case 'OPEN_EDIT_FRAME':
      modifyEditElement(data);
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

const handleEdit = (htmlElement) => reducer({
  type: 'OPEN_EDIT_FRAME',
  data: htmlElement,
});

const confirmTask = (task, id) => reducer({
  type: 'CONFIRM_TASK',
  data: {
    task,
    id,
  },

});

window.onload = renderList(state.toDoList);
