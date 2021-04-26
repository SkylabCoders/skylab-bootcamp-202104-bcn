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
  inputNewTask.setAttribute('placeholder', 'Detail your task...');
};

const onClickCreateButton = () => {
  const getCreateButton = document.querySelector('.form-create__button');
  getCreateButton.onclick = (element) => {
    element.preventDefault();
    getInfoToCreateTask();
  };
};

const onLoad = () => {
  createTitle();
  createForm();
  onClickCreateButton();
};

const printNewTask = (dataBase) => {
  const divList = createElements('div', getMainSection, 'list');
  const containerList = createElements('ul', divList, 'list-container');
  const newLi = createElements('li', containerList, 'list-container__item', `${dataBase[dataBase.length - 1].data.value}`);
  const IdTaskToDelete = newLi.setAttribute('id', `${dataBase[dataBase.length - 1].data.id}`);
  const divButtons = createElements('div', newLi, 'list-container__item-div');
  const finishedButton = createElements('button', divButtons, 'list__finished-button', '<i class="far fa-check-circle"></i>');
  const setIdTaskToFinishedButton = finishedButton.setAttribute('id', `${dataBase[dataBase.length - 1].data.id}`);
  const editButton = createElements('button', divButtons, 'list__edit-button', '<i class="far fa-edit"></i>');
  const setIdTaskToEditButton = editButton.setAttribute('id', `${dataBase[dataBase.length - 1].data.id}`);
  const deleteButton = createElements('button', divButtons, 'list__delete-button', '<i class="far fa-trash-alt"></i>');
  const setIdTaskToDeleteButton = deleteButton.setAttribute('id', `${dataBase[dataBase.length - 1].data.id}`);
  onClickDeleteButton(indexDataBase);
  onClickFinishedButton(indexDataBase);
  onClickEditButton(indexDataBase);
};

const onClickDeleteButton = (id) => {
  const getDeleteButton = document.getElementsByClassName('list__delete-button')[id];
  getDeleteButton.onclick = (element) => {
    element.preventDefault();
    getIdtoDeleteTask(element.currentTarget.parentNode.parentNode.id);
  };
};

const deleteSelectTask = (id) => {
  const selectHtmlLine = document.getElementById(`${id}`);
  const deleteDivContainer = selectHtmlLine.parentNode.parentNode.remove();
};

const onClickFinishedButton = (id) => {
  const getFinishedButton = document.getElementsByClassName('list__finished-button')[id];
  getFinishedButton.onclick = (element) => {
    element.preventDefault();
    getIdtoFinishedTask(element.currentTarget.parentNode.parentNode.id);
  };
};

const finishSelectTask = (id) => {
  const getFinishedTask = document.getElementById(`${id}`);
  getFinishedTask.classList.add('finish');
  const getBloquedFinishButton = document.getElementsByClassName('list__finished-button')[id];
  getBloquedFinishButton.firstChild.classList.add('bloqued');
  const getBloquedEditButton = document.getElementsByClassName('list__edit-button')[id];
  getBloquedEditButton.firstChild.classList.add('bloqued');
};

const onClickEditButton = (id) => {
  const getEditButton = document.getElementsByClassName('list__edit-button')[id];
  getEditButton.onclick = (element) => {
    element.preventDefault();
    getIdtoEditTask(element.currentTarget.parentNode.parentNode.id);
  };
};

const editSelectTask = (id) => {
  const setLiToEdit = document.getElementsByClassName('list-container__item')[id];
  setLiToEdit.setAttribute('contentEditable', 'true');
};
