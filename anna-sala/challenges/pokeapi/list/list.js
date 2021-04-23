const list = document.querySelector('.pokemons__list');
const oldLimit = new URLSearchParams(window.location.search).get('limit');
let oldOffset = new URLSearchParams(window.location.search).get('offset');
const pokemonPage = new URLSearchParams(window.location.search).get('pokemonName');

function printOnListPage(tag, text, idName, url) {
  const listItem = document.createElement('li');
  const content = document.createElement(tag);
  listItem.setAttribute('class', idName);
  content.innerHTML = text;
  content.href = url;
  listItem.appendChild(content);
  list.appendChild(listItem);
}

const removeAllChildNodes = (parent) => {
  while (parent.firstChild) {
    parent.removeChild(parent.firstChild);
  }
};

function fetchApiList(limit, offset, callback) {
  return fetch(`https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`)
    .then((response) => response.json())
    .then((data) => callback(data));
}

function iterationList(obj) {
  obj.results.forEach((element) => {
    printOnListPage('a', element.name, 'pokemons__list--item', `./../detail/detail.html?pokemonName=${element.name}`);
  });
}

fetchApiList(0, 5, iterationList);

function previousPage() {
  if (oldOffset < 0) {
    oldOffset -= 5;
    removeAllChildNodes(list);
    fetchApiList(oldLimit, oldOffset, iterationList);
  }
}
function nextPage() {
  if (oldOffset < 1113) {
    oldOffset += 5;
    removeAllChildNodes(list);
    fetchApiList(oldLimit, oldOffset, iterationList);
  }
}
