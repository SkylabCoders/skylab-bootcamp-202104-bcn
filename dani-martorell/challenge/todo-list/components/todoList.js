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
  const taskHtmlElement = createDomElement(parent, 'li', null, { class: 'tasks__list-item', id });
  createDomElement(taskHtmlElement, 'input', null, {
    class: 'edit-input', type: 'text', autofocus: true, autocomplete: 'off',
  });
  createDomElement(taskHtmlElement, 'p', task);
  createDomElement(taskHtmlElement, 'a', '🖊', { class: 'task-button task-button__edit', role: 'button', onclick: 'handleEdit(this.parentElement.id)' });
  createDomElement(taskHtmlElement, 'a', '🚮', { class: 'task-button task-button__delete', role: 'button', onclick: 'removeTask(this.parentElement.id)' });
  createDomElement(taskHtmlElement, 'a', 'Done', { class: 'task-button task-button__editOk', role: 'button', onclick: 'confirmEdit(this.parentElement.firstElementChild.value, this.parentElement.id)' });
  parent.append(taskHtmlElement);
};

const renderList = (list) => {
  const listSection = document.querySelector('.tasks');
  listSection.innerHTML = '';

  if (list.length === 0) {
    createDomElement(listSection, 'img', null, { class: 'buda-img--visible', src: './buda-img.png' });
    setTimeout(() => {
      createDomElement(listSection, 'span', 'Now\nBreathe\nand\nChill', { class: 'buda-message--visible' });
    }, 100);
  } else {
    createDomElement(listSection, 'h1', 'Don\'t Forget', { class: 'title' });
    const ul = createDomElement(listSection, 'ul', null, { class: 'tasks__list' });
    list.forEach((task) => createItem(task, ul));
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

  renderElement(taskToEdit);
};

window.onload = renderList(state.toDoList);
