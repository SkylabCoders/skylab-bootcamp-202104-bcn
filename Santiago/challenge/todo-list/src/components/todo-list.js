const main = document.querySelector('.main');

const createDomElements = (element, text, href, parent, id) => {
  const elementToCreate = document.createElement(element);
  if (text) {
    elementToCreate.innerText = text;
  }
  if (href) {
    elementToCreate.setAttribute('href', href);
  }
  if (id) {
    elementToCreate.setAttribute('id', id);
  }
  parent.appendChild(elementToCreate);
  return elementToCreate;
};

const createHeader = () => {
  const header = createDomElements('header', '', '', main, 'header-container');
  createDomElements('h1', 'TO DO LIST!', '', header);
};

const createMainDiv = () => {
  const mainDiv = createDomElements('div', '', '', main, 'main-container');
  return mainDiv;
};

const createTodoListDiv = (mainDiv) => {
  const todoContain = createDomElements('div', '', '', mainDiv, 'todo-container');
  return todoContain;
};

const createInputs = (todoContain) => {
  createDomElements('span', 'Add task', '', todoContain);
  createDomElements('input', '', '', todoContain);
  createDomElements('button', 'ADD', '', todoContain);
  createDomElements('span', 'Delete task', '', todoContain);
  createDomElements('input', '', '', todoContain);
  createDomElements('button', 'DELETE', '', todoContain);
};

createHeader();
const divConatiner = createMainDiv();
const createTdList = createTodoListDiv(divConatiner);
createInputs(createTdList);
