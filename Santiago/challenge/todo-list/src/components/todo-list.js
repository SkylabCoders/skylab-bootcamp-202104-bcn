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

const createULs = () => {
  const tasksUL = createDomElements('ul', '', '', main, 'chopped');
};

const updateList = ((payload) => {
  const tasksList = document.querySelector('#chopped');
  tasksList.innerHTML = '';
  payload.forEach(({ id, description, completed }) => {
    const taskLi = createDomElements('li', `${description}`, '', tasksList);
    const deleteBtn = createDomElements('button', 'DELETE', '', taskLi);
    deleteBtn.onclick = (() => taskDeleted(id));
    const doneBtn = createDomElements('button', 'DONE', '', taskLi);
    doneBtn.onclick = (() => taskDone(id));
    if (completed) {
      taskLi.classList.add('done-task');
    }
  });
});

const init = () => {
  createHeader();
  createMainDiv();
  createInputs();
  createULs();
};
init();
