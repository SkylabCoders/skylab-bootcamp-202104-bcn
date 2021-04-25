const main = document.querySelector('main');

const header = createElement('header', null, null, main);

createElement('h2', 'To Do list:', null, header);

const ul = createElement('ul', null, null, header);

const input = createElement('input', null, null, header);
input.getAttribute('value');

const addButton = createElement('button', 'Add to list', null, header);
addButton.onclick = function () { addToList(input, myArray); };

const resetButton = createElement('button', 'Clean all', null, main);
resetButton.onclick = function () { resetList(myArray, element); };
