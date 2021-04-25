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
createHeader();

const createMainDiv = () => {
  const mainDiv = createDomElements('div', '', '', main, 'main-container');
  return mainDiv;
};
const myMainDiv = createMainDiv();

const createInputs = () => {
  createDomElements('span', 'Add task', '', myMainDiv);
  createDomElements('input', '', '', myMainDiv, 'text-input');
  const addBtn = createDomElements('button', 'ADD', '', myMainDiv, 'add-btn');
  addBtn.setAttribute('onclick', 'taskAdded()');
};

const createULs = () => {
  const tasksUL = createDomElements('ul', '', '', myMainDiv, 'unorderedLi');
};

const updateList = ((payload) => {
  const tasksList = document.querySelector('#unorderedLi');
  tasksList.innerHTML = '';
  payload.forEach(({ id, description, completed }) => {
    const taskLi = createDomElements('li', '', '', tasksList);
    createDomElements('span', `${description}`, '', taskLi, 'span-task');
    const deleteBtn = createDomElements('button', 'DELETE', '', taskLi, 'delete-btn');
    deleteBtn.onclick = (() => taskDeleted(id));
    const doneBtn = createDomElements('button', 'DONE', '', taskLi, 'done-btn');
    doneBtn.onclick = (() => taskDone(id));
    if (completed) {
      taskLi.classList.add('done-task');
    }
  });
});

const init = () => {
  createInputs();
  createULs(myMainDiv);
};
init();
