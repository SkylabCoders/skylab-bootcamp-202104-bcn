function createNewElement(elementType, elementClass, text, parent, url) {
  const element = document.createElement(elementType);
  element.getAttribute(elementClass);
  element.innerHTML = text;
  element.href = url;
  parent.appendChild(element);
  return element;
}

function getHeroes(array) {
  return array.slice(1, 5);
}

function fetchHeroes(url) {
  return fetch(url)
    .then((response) => response.json())
      .then((data) => (data));
  .catch(e => {console.error('hay un error', e);});
}

function createInnerElements(num, elementType, elementClass, text, parent, url) {
  for (let i = 0; i < num; i++) {
    createNewElement(elementType, elementClass, text, parent, url);
  }
}

// function createMenuElements(tag, nameClass, position, parent) {
//   for (let i = 0; i < 4; i++) {
//     heroes.then((data) => createNewElement(tag, nameClass, data[i].name, parent));
//   }
// }
