const getMainSection = document.querySelector('main');

const createElements = (tag, parent, className, innerHTML = null) => {
  const newTag = document.createElement(tag);
  newTag.classList.add(className);
  parent.appendChild(newTag);
  newTag.innerHTML = innerHTML;
  return newTag;
};

const createTitle = () => {
  const mainTitle = createElements('h1', getMainSection, 'title', 'To Do List');
};

const createForm = () => {
  const formTask = createElements('form', getMainSection, 'form-create');
  const inputNewTask = createElements('input', formTask, 'form-create__input');
  const createButton = createElements('button', formTask, 'form-create__button', 'Add Task');
  inputNewTask.setAttribute('type', 'text');
  inputNewTask.setAttribute('name', 'newTask');
  inputNewTask.setAttribute('required', 'required');
  inputNewTask.setAttribute('pattern', '[aA-zZ]{3,40}');
  inputNewTask.setAttribute('title', 'It cant be empty');
  inputNewTask.setAttribute('placeholder', 'Detail your task');
};

const createButtons = () => {
  const getContainerButtons = createElements('div', getMainSection, 'container-buttons');
  const modifyButton = createElements('button', getContainerButtons, 'container-buttons__modify', 'Modify Task');
  const deleteButton = createElements('button', getContainerButtons, 'container-buttons__delete', 'Delete Task');
};

const onLoad = () => {
  createTitle();
  createForm();
  createButtons();
  onClickCreateButton();
};

// const ACTIONS = require('../actions/actionTypes');

// const {
//   store, reducerToAdd, reducerToDelete, reducerToModify,
// } = require('../store/store');

const onClickCreateButton = () => {
  const getCreateButton = document.querySelector('.form-create__button');
  getCreateButton.onclick = (element) => {
    element.preventDefault();
    toCreateTask();
  };
};

const printNewTask = (arrayTask) => {
  console.log('print');
  const divList = createElements('div', getMainSection, 'list');
  const containerList = createElements('ul', divList, 'list-container');
  arrayTask.forEach((element) => {
    const newLi = createElements('li', containerList, 'list-container__item', `${element}`);
  });
};
