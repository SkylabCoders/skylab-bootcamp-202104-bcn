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

const createInputs = () => {
  createDomElements('span', 'Add task', '', main);
  createDomElements('input', '', '', main, 'first');
  const addBtn = createDomElements('button', 'ADD', '', main);
  addBtn.setAttribute('onclick', 'taskAdded()');
};

const createTask = (task) => {
  const listContainer = createDomElements('div', '', '', main);
  const taskUl = createDomElements('ul', '', '', listContainer);
  const taskLi = createDomElements('li', task, '', taskUl);
  createDomElements('button', 'DELETE', '', taskLi);
  createDomElements('button', 'DONE', '', taskLi);
};

createHeader();
createMainDiv();
createInputs();
