const main = document.querySelector('main');

const header = createElement('header', null, null, main);
createElement('h2', 'Elementos lista:', null, header);
const ul = createElement('ul', null, null, header);
const input = createElement('input', 'hi', null, header);
const prevButton = createElement('button', 'Añadir a la lista', null, header);

createList(myArray);
