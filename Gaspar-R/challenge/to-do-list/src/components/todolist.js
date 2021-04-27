// const actionType = require('./actionTypes');

const addTaskElement = document.querySelector('.addtask');
const inputBtn = document.querySelector('.addtask-input');
const todoUl = document.querySelector('.todo-list');

const handlerAddTask = () => {
  addTask(inputBtn.value)
    .then((result) => dispatcher(result) && updateHTML())
   .catch((error)=> {alert (error.message);})
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

function addTaskBtn() {
  const addBtn = document.createElement('button');
  addBtn.classList.add('addtask_button');
  addBtn.onclick = (() => handlerAddTask());

  addBtn.innerText = '+';
  addTaskElement.appendChild(addBtn);
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
addTaskBtn();
getTask();
