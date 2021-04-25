// const STORE = require('../store/store');

const TASKLIST = document.querySelector('.todo-list');
const inputBtn = document.querySelector('.addtask-input');
const todoUl = document.querySelector('.todo-list');

const handlerAddTask = () => {
  const newTask = addTask(inputBtn.value);
  dispatcher(newTask);
  updateHTML();
};

const handlerDeleteTask = (taskId) => {
  const delTaskId = deleteTask(taskId);
  dispatcher(delTaskId);
  updateHTML();
};

const handlerDoneTask = (taskId) => {
  const completeTask = completedTask(taskId);
  dispatcher(completeTask);
  updateHTML();
};

function updateHTML() {
  todoUl.innerText = '';
  state.forEach((task) => {
    const li = document.createElement('li');
    li.classList.add('task_li');
    li.innerText = `${task.title}`;

    todoUl.appendChild(li);
    delBtnCreator(li, task);
    doneBtn(li, task);
  });
}

function delBtnCreator(li, task) {
  const delBtn = document.createElement('button');
  delBtn.classList.add('delBtn');
  delBtn.onclick = (() => handlerDeleteTask(task.id));

  delBtn.innerText = '-';
  li.appendChild(delBtn);
}

function doneBtn(li, task) {
  const doneBtn = document.createElement('button');
  if (task.complete === true) {
    doneBtn.classList.add('completedTaskBtn');
    doneBtn.setAttribute('disable', '');
    li.classList.add('completedTask_li');
  } else { doneBtn.classList.add('doneBtn'); }
  doneBtn.onclick = (() => handlerDoneTask(task.id));

  doneBtn.innerText = '✓';
  li.appendChild(doneBtn);
}

updateHTML();
console.log(state);
