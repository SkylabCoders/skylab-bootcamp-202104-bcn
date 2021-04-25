// const STORE = require('../store/store');

const TASKLIST = document.querySelector('.todo-list');
const inputBtn = document.querySelector('.addtask-input');
const todoUl = document.querySelector('.todo-list');

const handlerAddTask = () => {
  const newTask = addTask(inputBtn.value);
  dispatcher(newTask);
  console.log('asd', state);
};

const handlerDeleteTask = (taskId) => {
  const delTaskId = deleteTask(taskId);
  dispatcher(delTaskId);
//   console.log(taskId);
};

function updateHTML() {
  todoUl.innerText = '';
  state.forEach((task) => {
    const li = document.createElement('li');
    li.innerText = `${task.title}`;

    todoUl.appendChild(li);
    delBtnCreator(li, task);
  });
}

updateHTML();

console.log(state);

function delBtnCreator(li, task) {
  const delBtn = document.createElement('button');
  delBtn.classList.add('delBtn', `id${task.id}`);
  delBtn.onclick = (() => handlerDeleteTask(task.id));

  delBtn.innerText = '-';
  li.appendChild(delBtn);
}
