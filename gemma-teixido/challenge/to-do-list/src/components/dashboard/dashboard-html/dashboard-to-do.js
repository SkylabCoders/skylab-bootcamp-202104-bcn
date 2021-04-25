const headerToDoList = document.querySelector('header');
const body = document.querySelector('body');
let id = 0;

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
  const divList = createElements('div', body, 'divList', null);
  const ulList = createElements('ul', divList, 'ulForList', null);
};

const buttonFunction = () => {
  const buttonEnterTasks = document.querySelector('.buttonEnterTasks');
  buttonEnterTasks.setAttribute('onclick', 'buttonEnterTasks()');
};

const addNewTask = (myList) => {
  const getUl = document.querySelector('.ulForList');
  const liList = createElements('li', getUl, 'liOfTasks', null);
  const liText = createElements('p', liList, `taskID${id}`, `${myList[myList.length - 1]}`);
  const buttonTaskDone = createElements('button', liList, 'buttonDone', 'Done');
  const buttonTaskDelete = createElements('button', liList, 'buttonDelete', 'Delete');
  buttonTaskDone.setAttribute('onclick', `buttonTaskDone(${id})`);
  buttonTaskDelete.setAttribute('onclick', `buttonTaskDelete(${id})`);
  id += 1;
};

const deleteTask = (newArray) => {
  const oldUl = document.querySelector('.ulForList');
  oldUl.innerHTML = '';
  newArray.forEach((string, index) => {
    const newLi = createElements('li', oldUl, 'liOfTasks', null);
    const newTask = createElements('p', newLi, `taskID${id}`, `${newArray[index]}`);
    createElements('button', newLi, 'buttonDone', 'Done');
    const buttonTaskDelete = createElements('button', newLi, 'buttonDelete', 'Delete');
    buttonTaskDelete.setAttribute('onclick', `buttonTaskDelete(${id})`);
  });
};

const doneTask = (taskDone) => {
  const oldUl = document.querySelector('.ulForList');
  oldUl.innerHTML = '';
  taskDone.forEach((string, index) => {
  });
};

const onLoad = () => {
  createHeader();
  divTasks();
  buttonFunction();
};
