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
  createDomElement(li, 'input', null, {
    class: 'edit-input', type: 'text', autofocus: true, autocomplete: 'off',
  });
  createDomElement(li, 'p', task);
  createDomElement(li, 'a', '🖊', { class: 'task-button task-button__edit', role: 'button', onclick: 'handleEdit(this.parentElement.id)' });
  createDomElement(li, 'a', '🚮', { class: 'task-button task-button__delete', role: 'button', onclick: 'removeTask(this.parentElement.id)' });
  createDomElement(li, 'a', 'Done', { class: 'task-button task-button__editOk', role: 'button', onclick: 'confirmEdit(this.parentElement.firstElementChild.value, this.parentElement.id)' });
  parent.append(li);
};

const renderList = (list) => {
  const img = document.querySelector('img');
  const title = document.querySelector('h1');
  const budaMessage = document.querySelector('span');
  const ul = document.querySelector('.tasks__list');
  ul.innerHTML = '';
  list.forEach((task) => createItem(task, ul));
  if (list.length === 0) {
    img.className = 'buda-img--visible';
    title.className = 'title--invisible';
    budaMessage.className = 'buda-message--visible';
  } else {
    img.className = 'buda-img';
    budaMessage.className = 'buda-img';
    title.className = 'title';
  }
};

const renderElement = (editedElement) => {
  const id = editedElement.getAttribute('id');
  let elementToUpdate = document.getElementById(id);
  elementToUpdate = '';
  elementToUpdate = editedElement;
};

const editMode = (id) => {
  const taskToEdit = document.getElementById(id);
  const button = taskToEdit.lastElementChild;
  const inputField = taskToEdit.firstElementChild;
  button.classList.add('task-button__editOk--visible');
  inputField.classList.add('edit-input--visible');

  renderElement(htmlElement);
};

window.onload = renderList(state.toDoList);
