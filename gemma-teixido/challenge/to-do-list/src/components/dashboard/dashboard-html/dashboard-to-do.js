const headerToDoList = document.querySelector('header');
const body = document.querySelector('body');

const createElements = (tag, parent, className, text) => {
  const creationTag = document.createElement(tag);
  parent.appendChild(creationTag);
  creationTag.className = className;
  creationTag.innerText = text;
  return creationTag;
};

const createHeader = () => {
  createElements('h1', headerToDoList, 'headerTitle', 'To-Do-List');
};

const divTasks = () => {
  const registerTasks = createElements('div', body, 'registerTasks', null);
  createElements('input', registerTasks, 'inputTasks', null);
  createElements('button', registerTasks, 'buttonEnterTasks', 'Register Task');
};

const buttonFunction = () => {
  const buttonEnterTasks = document.querySelector('.buttonEnterTasks');
  buttonEnterTasks.setAttribute('onclick', 'buttonEnterTasks()');
};

const onLoad = () => {
  createHeader();
  divTasks();
  buttonFunction();
};
