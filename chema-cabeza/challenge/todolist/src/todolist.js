const todoList = document.querySelector('.todo-list');

function printTasks(tasks) {
  if (todoList.childElementCount) {
    while (todoList.firstChild) {
      todoList.removeChild(todoList.firstChild);
    }
  }
  tasks.forEach((element) => {
    const todoDiv = document.createElement('div');
    todoDiv.classList.add('todo');
    const newTodo = document.createElement('li');
    newTodo.innerText = element.name;
    newTodo.classList.add('todo-item');
    todoDiv.appendChild(newTodo);
    const completedButton = document.createElement('button');
    completedButton.innerHTML = '<i class="fas fa-check"> </i>';
    completedButton.classList.add('complete-btn');
    todoDiv.appendChild(completedButton);

    const trashButton = document.createElement('button');
    trashButton.innerHTML = '<i class="fas fa-trash"> </i>';
    trashButton.classList.add('trash-btn');
    const currentID = element.id;
    trashButton.onclick = function () { deleteTodo(currentID); };
    todoDiv.appendChild(trashButton);
    todoList.appendChild(todoDiv);
  });
}
