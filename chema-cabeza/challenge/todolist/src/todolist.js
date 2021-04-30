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
    newTodo.innerText = element.title;
    newTodo.classList.add('todo-item');
    if (element.done === true) { newTodo.classList.add('done'); }
    todoDiv.appendChild(newTodo);

    const editButton = document.createElement('button');
    newTodo.contentEditable = element.editable;
    if (element.editable) { editButton.innerHTML = '<i class="fas fa-paper-plane"></i>'; } else { editButton.innerHTML = '<i class="fas fa-edit"></i>'; }
    editButton.classList.add('edit-btn');
    editButton.onclick = function () {
      editTodo(element.id, newTodo.innerText);
    };
    todoDiv.appendChild(editButton);

    const completedButton = document.createElement('button');
    completedButton.innerHTML = '<i class="fas fa-check"> </i>';
    completedButton.classList.add('complete-btn');
    completedButton.onclick = function () {
      doneTodo(element.id);
    };
    todoDiv.appendChild(completedButton);

    const trashButton = document.createElement('button');
    trashButton.innerHTML = '<i class="fas fa-trash"> </i>';
    trashButton.classList.add('trash-btn');
    trashButton.onclick = function () { deleteTodo(element.id); };
    todoDiv.appendChild(trashButton);
    todoList.appendChild(todoDiv);
  });
}
