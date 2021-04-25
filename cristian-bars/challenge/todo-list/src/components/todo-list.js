const main = document.querySelector('.main');
const toDoListUrl = '../store/todo-tasks.json';

function createElementHtml(node, nodeContent, className, link = null, parent) {
  const newNode = document.createElement(node);
  newNode.innerText = nodeContent;
  newNode.className = className;
  if (link) {
    newNode.href = link;
  }
  parent.appendChild(newNode);
  return newNode;
}

const createHeader = () => {
  const header = createElementHtml('header', '', 'header', '', main);
  const title = createElementHtml('h1', 'Todo list', 'header_title', '', header);
};

const createContainer = () => {
  const container = createElementHtml('div', '', 'container', '', main);
  const list = createElementHtml('ul', '', 'container__list', '', container);
};

const showList = () => {
  fetch(toDoListUrl)
    .then((response) => response.json())
    .then((data) => data.forEach((task) => updateTask(task)))
    .catch((err) => console.error('ERROR: ', err.message));
};

const updateTask = (task) => {
  const ulList = document.querySelector('ul');
  const itemList = createElementHtml('li', task.description, 'container__item', '', ulList);
  itemList.setAttribute('id', task.id);
  const itemListButton = createElementHtml('button', 'Delete', 'container__delTaskButton', '', itemList);
  itemListButton.setAttribute('onclick', 'delTask()');
};

const createInputsButtons = () => {
  const cont = document.querySelector('.container');
  const buttons = createElementHtml('div', '', 'container__buttons', '', cont);
  const addTaskDiv = createElementHtml('div', '', 'container__addTaskButton', '', buttons);
  const addTask = createElementHtml('span', 'Add task', 'container__addTask', '', addTaskDiv);
  const inputTask = createElementHtml('input', '', 'container__addInput', '', addTaskDiv);
  const buttonAddTask = createElementHtml('button', 'Acept', 'container__addButton', '', addTaskDiv);
  buttonAddTask.setAttribute('onclick', 'addTask()');
};

const updateList = ((payload) => {
  const tasksList = document.querySelector('ul');
  tasksList.innerHTML = '';
  payload.forEach(({ id, description, complete }) => {
    const taskLi = createElementHtml('li', `${description}`, 'container__item', '', tasksList);
    taskLi.setAttribute('id', id);
    taskLi.setAttribute('complete', complete);
    const deleteBtn = createElementHtml('button', 'DELETE', 'container__delTaskButton', '', taskLi);
    deleteBtn.setAttribute('onclick', `delTask(${id})`);
    const doneBtn = createElementHtml('button', 'DONE', 'container__doneTaskButton', '', taskLi);
    doneBtn.setAttribute('onclick', `doneTask(${id})`);
  });
});

const init = () => {
  createHeader();
  createContainer();
  showList();
  createInputsButtons();
};

init();
