function createList() {
  const x = document.getElementById('inputTodo').value;
  const listTodo = document.createElement('ul');
  containerInput.appendChild(listTodo);
  const inputList = document.createElement('li');
  listTodo.appendChild(inputList);
  inputList.innerHTML = x;
}
