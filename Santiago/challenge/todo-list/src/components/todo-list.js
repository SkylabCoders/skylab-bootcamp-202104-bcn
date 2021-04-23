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
  createDomElements('h1', 'Welcome!', '', header);
};

const createMainDiv = () => {
  const mainDiv = createDomElements('div', '', '', main, 'main-container');
  createDomElements('h2', 'TO DO LIST', '', mainDiv);
  return mainDiv;
};

const createBtns = (mainDiv) => {
  createDomElements('button', 'TO DO', '', mainDiv);
};

createHeader();
const divConatiner = createMainDiv();
createBtns(divConatiner);
