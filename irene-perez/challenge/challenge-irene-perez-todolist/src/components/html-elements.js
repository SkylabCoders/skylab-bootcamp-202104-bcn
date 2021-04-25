const main = document.querySelector('main');

const header = createElement('header', null, null, main);
header.setAttribute('className', 'header');

const tittle = createElement('h2', 'To Do list:', null, header);
tittle.setAttribute('className', 'header__tittle');

const ul = createElement('ul', null, null, header);
ul.setAttribute('className', 'header__ul');

const input = createElement('input', null, null, header);
input.getAttribute('className', 'header__input');
input.getAttribute('value');

const addButton = createElement('button', 'Add to list', null, header);
addButton.setAttribute('className', 'header__addButton');
addButton.onclick = function () { addToList(input, myArray); };

const resetButton = createElement('button', 'Clean all', null, main);
resetButton.setAttribute('className', 'resetButton');
resetButton.onclick = function () { resetList(myArray, ul); };
