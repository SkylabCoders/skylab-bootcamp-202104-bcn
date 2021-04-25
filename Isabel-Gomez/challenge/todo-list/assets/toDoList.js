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
  const doItButton = createElements('button', divButtons, 'list__doIt-button', '<i class="far fa-check-circle"></i>');
  const editButton = createElements('button', divButtons, 'list__edit-button', '<i class="far fa-edit"></i>');
  const deleteButton = createElements('button', divButtons, 'list__delete-button', '<i class="far fa-trash-alt"></i>');
  onClickDeleteButton();
};

const onClickDeleteButton = () => {
  const getDeleteButton = document.querySelector('.list__delete-button');
  getDeleteButton.onclick = (element) => {
    element.preventDefault();
    console.log('delete');
    getIdtoDeleteTask(element.currentTarget.parentNode.parentNode.id);
  };
};

const deleteSelectTask = (id) => {
  console.log('id en component', id);
  console.log('dataBase', dataBase);
  const newdataBase = dataBase.filter((element) => element.data.id !== Number(id));
  dataBase = newdataBase;
  console.log('newdataBase', newdataBase);
};
