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

const onClickCreateButton = () => {
  const getCreateButton = document.querySelector('.form-create__button');
  getCreateButton.onclick = (element) => {
    element.preventDefault();
    toCreateTask();
  };
};

const printNewTask = (arrayTask) => {
  const divList = createElements('div', getMainSection, 'list');
  const containerList = createElements('ul', divList, 'list-container');
  const newLi = createElements('li', containerList, 'list-container__item', `${arrayTask[arrayTask.length - 1].data}`);
  const modifyButton = createElements('button', newLi, 'container-buttons__modify', 'Edit');
  const editButton = createElements('button', newLi, 'container-buttons__edit', 'Do it');
  const deleteButton = createElements('button', newLi, 'container-buttons__delete', 'Delete');
  onClickDeleteButton();
};

const onClickDeleteButton = () => {
  const getDeleteButton = document.querySelector('.container-buttons__delete');
  getDeleteButton.onclick = (element) => {
    element.preventDefault();
    console.log('delete');
    toDeleteTask();
  };
};

const deleteSelectTask = (id) => {
  getDeleteButton.remove();
};

const onLoad = () => {
  createTitle();
  createForm();
  onClickCreateButton();
};
