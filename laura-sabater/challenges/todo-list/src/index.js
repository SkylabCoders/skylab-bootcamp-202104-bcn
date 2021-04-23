const main = document.querySelector('main');

const mainTitle = createNewElement('h2', 'title', main);
mainTitle.innerHTML = 'Todo List';

const list = createNewElement('ul', 'todo-list', main);

const elementList = createNewElement('li', 'todo-list__element', list);

const input = createNewElement('input', 'input', main);

const button = createNewElement('button', 'button-input', main);
