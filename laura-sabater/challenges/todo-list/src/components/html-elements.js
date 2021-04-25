const main = document.querySelector('main');

const mainTitle = createHtmlElement('h2', 'title', main);
mainTitle.innerHTML = 'Todo List';

const inputContainer = createHtmlElement('div', 'input-container', main);

const input = createHtmlElement('input', 'input', inputContainer);

const addButton = createHtmlElement('button', 'button-input', inputContainer);
addButton.innerHTML = 'Add to list';
addButton.onclick = function () {
  addHtmlList(store, input);
};

const list = createHtmlElement('ul', 'todo-list', main);
list.getAttribute('id', 'myList');

const resetButton = createHtmlElement('button', 'reset-button', main);
resetButton.innerHTML = 'Reset List';
resetButton.onclick = function () {
  resetList(store, list);
};
