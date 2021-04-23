let state = [];

function deleteList() {
  if (state.length === 0) {
    alert('Your list must contain thing to do !');
  } else {
    const todoItem = document.getElementById('inputTodo').value;
    const filteredList = state.filter(((item) => item !== todoItem));
    state = filteredList;
  }
}

function createList() {
  const todoItem = document.getElementById('inputTodo').value;
  state.push(todoItem);
  printList(todoItem);
  console.log(state);
}

function printList(update) {
  containerInput.appendChild(listTodo);
  const inputList = document.createElement('li');
  listTodo.appendChild(inputList);
  inputList.innerHTML = update;
}

if (state.length > 0) {
  printList(state);
}
