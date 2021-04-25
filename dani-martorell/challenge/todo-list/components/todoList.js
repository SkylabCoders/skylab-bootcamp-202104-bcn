const input = document.querySelector('.input-field');
const btn = document.querySelector('.btn');

function createDomElement(parent, element, text = null, attributes = []) {
  const elementToCreate = document.createElement(element);
  if (text) {
    elementToCreate.innerText = text;
  }
  if (attributes) {
    Object.entries(attributes).map(([attribute, value]) => {
      elementToCreate.setAttribute(attribute, value);
    });
  }
  parent.appendChild(elementToCreate);
  return elementToCreate;
}

const createItem = ({ task, id }, parent) => {
  const li = document.createElement('li');
  li.className = 'tasks__list-item';
  li.setAttribute('id', id);
  const p = document.createElement('p');
  p.textContent = task;

  // const deleteButton = document.createElement('a');
  const editButton = document.createElement('a');
  const editInput = document.createElement('input');
  const editBoxInputBtn = document.createElement('a');

  // deleteButton.textContent = 'X';
  // deleteButton.classList.add('task-button', 'task-button__delete');
  // deleteButton.setAttribute('role', 'button');
  // deleteButton.setAttribute('onclick', 'removeTask(this.parentElement.id)');

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
  editBoxInputBtn.setAttribute('role', 'button');
  editBoxInputBtn.setAttribute('onclick', 'confirmEdit(this.parentElement.firstElementChild.value, this.parentElement.id)');

  li.append(editInput);
  li.append(p);
  li.append(editButton);
  // li.append(deleteButton);
  createDomElement(li, 'a', 'X', { class: 'task-button task-button__delete', role: 'button', onclick: 'removeTask(this.parentElement.id)' });
  li.append(editBoxInputBtn);

  parent.append(li);
};
const renderList = (list) => {
  const ul = document.querySelector('.tasks__list');
  ul.innerHTML = '';
  list.forEach((task) => createItem(task, ul));
};

const renderElement = (editedElement, oldElement) => {
  const id = editedElement.getAttribute('id');
  let elementToUpdate = document.getElementById(id);
  elementToUpdate = '';
  elementToUpdate = editedElement;
};

const modifyEditElement = (htmlElement) => {
  state.editedElement = htmlElement;
  const button = state.editedElement.lastElementChild;
  const inputField = state.editedElement.firstElementChild;
  button.classList.add('task-button__editOk--visible');
  inputField.classList.add('edit-input--visible');
  renderElement(state.editedElement, htmlElement);
};

window.onload = renderList(state.toDoList);

/*
<a class="task-button task-button__delete" role="button" onclick="removeTask(this.parentElement.id)">X</a> */
