
const input = document.querySelector('.input-field');
const btn = document.querySelector('.btn');
const renderList = (list) => {
  const ul = document.querySelector('.tasks__list');
  ul.innerHTML = '';
  list.forEach((task) => createItem(task, ul));
};


const createItem = (task, parent) => {
  const li = document.createElement('li');
    li.className = 'tasks__list-item';
    const p = document.createElement('p');
    p.textContent = task;
    const deleteButton = document.createElement('a');
    const editButton = document.createElement('a');

    deleteButton.textContent = 'X';
    deleteButton.classList.add('task-button', 'task-button__delete');
    deleteButton.setAttribute('role', 'button');
    deleteButton.setAttribute('onclick', 'removeTask(this.parentElement.firstChild.textContent)');
    editButton.textContent = 'Edit';
    editButton.classList.add('task-button', 'task-button__edit');
    editButton.setAttribute('role', 'button');
    editButton.setAttribute('onclick', 'editTask(this.parentElement.firstChild.textContent, this.parentElement)');

    li.append(p);
    li.append(editButton);
    li.append(deleteButton);
    parent.append(li);
}
const addTaskToStore = ((task) => {
  state.toDoList.push(task);
  renderList(state.toDoList);
});

const removeTaskFromStore = ((task) => {
  const list = state.toDoList;
  const index = list.findIndex((element) => element === task); 
  list.splice(index, 1);
  renderList(state.toDoList);
});

const editTaskFromStore = (({ task, htmlElement }) => {
  const list = state.toDoList;
  const index = list.findIndex((element) => element === task); 
  const main = document.querySelector('.main-content');
  const editBox = document.createElement('div');
  editBox.classList.add('editBox');
  const editBoxInput = document.createElement('input');
  editBoxInput.classList.add('editBox__input');
  editBoxInput.setAttribute('type', 'text');
  editBoxInput.setAttribute('autofocus', 'true');
  editBoxInput.setAttribute('autocomplete', 'off');
  const editBoxInputBtn = document.createElement('a');
  editBoxInputBtn.classList.add('task-button', 'task-button__editOk');
  editBoxInputBtn.textContent = 'Done';
  editBox.append(editBoxInput);
  editBox.append(editBoxInputBtn)
  htmlElement.append(editBox);
  console.log(htmlElement);
});

const reducer = ({ type, data }) => {
  switch (type) {
    case 'ADD_TASK':
      addTaskToStore(data);
      break;
    
    case 'REMOVE_TASK':
      removeTaskFromStore(data);
      break;
      
    case 'EDIT_TASK':
      editTaskFromStore(data);
      break;

    default:
      break;
  }
};
const addTask = (task) => reducer({
  type: 'ADD_TASK',
  data: task,
});
const removeTask = (task) => reducer({
  type: 'REMOVE_TASK',
  data: task,
});

const editTask = (task, htmlElement) => reducer({
  type: 'EDIT_TASK',
  data: { task, htmlElement } 
});

window.onload = renderList(state.toDoList);

