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
  createDomElement(li, 'a', '🖊', { class: 'task-button task-button__edit', role: 'button', onclick: 'handleEdit(this.parentElement)' });
  createDomElement(li, 'a', '🚮', { class: 'task-button task-button__delete', role: 'button', onclick: 'removeTask(this.parentElement.id)' });
  createDomElement(li, 'a', 'Done', { class: 'task-button task-button__editOk', role: 'button', onclick: 'confirmEdit(this.parentElement.firstElementChild.value, this.parentElement.id)' });
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
