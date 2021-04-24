const state = [];
/* let idButton = 0; */
let idList = 0;

function deleteList() {

}

function createList() {
  const todoItem = document.getElementById('inputTodo').value;
  const createTodo = document.createElement('li');
  createTodo.setAttribute('id', idList += 1);
  listTodo.appendChild(createTodo);
  createTodo.innerHTML = todoItem;

  const deleteButton = document.createElement('button');
  createTodo.appendChild(deleteButton);
  /* deleteButton.setAttribute('id', idList += 1); */
  deleteButton.innerHTML = 'Delete';
  deleteButton.setAttribute('onclick', 'deleteList()');

  /* const editButton = document.createElement('button');
  createTodo.appendChild(editButton);
  editButton.setAttribute('id', id);
  editButton.innerHTML = 'Edit';
  editButton.setAttribute('onclick', 'edit()'); */

  state.push(todoItem);

  console.log(state);
}

/* const deleteButton = document.createElement('button');
    toDoThings.appendChild(deleteButton);
    deleteButton.setAttribute('id', id);
    deleteButton.innerHTML = 'Delete';
    deleteButton.setAttribute('onclick', 'deleteList()');

      const editButton = document.createElement('button');
      toDoThings.appendChild(editButton);
      editButton.innerHTML = 'Edit';
      editButton.setAttribute('onclick', 'editList()'); */
