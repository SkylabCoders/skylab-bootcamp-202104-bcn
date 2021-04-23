const main = document.querySelector('main');

function createHtmlList() {
  const header = createElementHtml('header', null, null, main);
  createElementHtml('h2', 'Elementos lista:', null, header);
  const ul = createElementHtml('ul', null, null, header);
  myList.forEach();
  const li = createElementHtml('li', 'hola', null, ul);
  const input = createElementHtml('input', 'hi', null, header);
  const prevButton = createElementHtml('button', 'Añadir a la lista', null, header);
}
createHtmlList();

function addElementList() {

}
