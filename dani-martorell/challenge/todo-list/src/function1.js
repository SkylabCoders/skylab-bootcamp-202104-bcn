
const input = document.querySelector('.input-field');
const btn = document.querySelector('.btn');
btn.addEventListener
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
    const editButton = document.createElement('a');
    const deleteButton = document.createElement('a');
    deleteButton.textContent = 'X';
    editButton.textContent = 'Edit';
    deleteButton.classList.add('task-button', 'task-button__delete')
    editButton.classList.add('task-button', 'task-button__edit')
    deleteButton.setAttribute('role', 'button');
    deleteButton.setAttribute('onclick', 'removeTask(this.parentElement.firstChild.textContent)');
    editButton.setAttribute('role', 'button');
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

const reducer = ({ type, data }) => {
  if (type === 'ADD_TASK') {
    addTaskToStore(data);
  }
  if(type === 'REMOVE_TASK') {
    removeTaskFromStore(data)
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

window.onload = renderList(state.toDoList);

