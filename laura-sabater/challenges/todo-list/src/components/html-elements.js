const main = document.querySelector('main');

const mainTitle = createNewElement('h2', 'title', main);
mainTitle.innerHTML = 'Todo List';

const list = createNewElement('ul', 'todo-list', main);
list.getAttribute('id', 'myList');

// createList(todoList);

const input = createNewElement('input', 'input', main);

const addButton = createNewElement('button', 'button-input', main);
addButton.innerHTML = 'Add to list';
addButton.onclick = function () {
  addToList(todoList, input);
};

const resetButton = createNewElement('button', 'reset-button', main);
resetButton.innerHTML = 'Reset List';
resetButton.onclick = function () {
  resetList(todoList, list);
};
