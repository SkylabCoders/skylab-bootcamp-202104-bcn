const main = document.querySelector('main');

const header = createElement('header', null, null, main);
header.setAttribute('class', 'header');

const tittle = createElement('h2', '✔️ To Do list ', null, header);
tittle.setAttribute('class', 'header__tittle');

const ul = createElement('ul', null, null, header);
ul.setAttribute('class', 'header__ul');

const input = createElement('input', null, null, header);
input.getAttribute('class', 'header__input');
input.getAttribute('value');

const addButton = createElement('button', 'Add to list', null, header);
addButton.setAttribute('class', 'header__addButton');
addButton.onclick = function () { addToList(input, myArray); };

const resetButton = createElement('button', 'Clean all', null, main);
resetButton.setAttribute('class', 'resetButton');
resetButton.onclick = function () { resetList(myArray, ul); };
