const getMainSection = document.querySelector('main');

const createElements = (tag, parent, className, innerHTML = null) => {
  const newTag = document.createElement(tag);
  newTag.classList.add(className);
  parent.appendChild(newTag);
  newTag.innerHTML = innerHTML;
  return newTag;
};

const mainTitle = createElements('h1', getMainSection, 'title', 'To Do List');
const formTask = createElements('form', getMainSection, 'form-create');
const inputToCreateNewTask = createElements('input', formTask, 'form-create__input');
const createButton = createElements('button', formTask, 'form-create__button', 'Add Task');

const getContainerButtons = createElements('div', getMainSection, 'container-buttons');
const modifyButton = createElements('button', getContainerButtons, 'container-buttons__modify', 'Modify Task');
const deleteButton = createElements('button', getContainerButtons, 'container-buttons__delete', 'Delete Task');

const addMultipleAttributes = () => {
  inputToCreateNewTask.setAttribute('type', 'text');
  inputToCreateNewTask.setAttribute('name', 'newTask');
  inputToCreateNewTask.setAttribute('required', 'required');
  inputToCreateNewTask.setAttribute('pattern', '[aA-zZ]{3,40}');
  inputToCreateNewTask.setAttribute('title', 'It cant be empty');
  inputToCreateNewTask.setAttribute('placeholder', 'Detail your task');
};
addMultipleAttributes();

// const ACTIONS = require('../actions/actionTypes');

// const {
//   store, reducerToAdd, reducerToDelete, reducerToModify,
// } = require('../store/store');

// const actionToDo = () => {
//   ACTIONS.ADD_TASK = 'ADD_TASK'; // como llamo a ACTION???????? //
// };

const onClickCreateButton = () => {
  createButton.onclick = () => {
    actionToDo();
  };
};
onClickCreateButton();
