const input = document.querySelector('.input-field');
const btn = document.querySelector('.btn');
const renderList = (list) => {
  const ul = document.querySelector('.tasks__list');
  ul.innerHTML = '';
  list.forEach((task) => {
    const li = document.createElement('li');
    li.className = 'tasks__list-item';
    li.textContent = task;
    const deleteButton = document.createElement('a');
    deleteButton.textContent = 'X';
    deleteButton.setAttribute('role', 'button');
    li.append(deleteButton);
    ul.append(li);
  });
};

const addTaskToStore = ((task) => {
  state.toDoList.push(task);
  renderList(state.toDoList);
});

const removeTaskFromStore = ((task) => {
  const list = state.toDoList;
  const index = list.findIndex((item) => item === task);
  list.splice(index, 1);
});

const reducer = ({ type, data }) => {
  if (type === 'ADD_TASK') {
    addTaskToStore(data);
  }
//   if( type === '')
};
const addTask = (task) => reducer({
  type: 'ADD_TASK',
  data: task,
});
const removeTask = (task) => reducer({
  type: 'REMOVE_TASK',
  data: task,
});

btn.onclick = (() => {
  addTask(input.value);
});
