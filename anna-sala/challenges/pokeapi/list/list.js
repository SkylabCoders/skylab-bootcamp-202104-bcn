const list = document.querySelector('ul');

function printOnPage(tag, text, idName, url) {
  const content = document.createElement(tag);
  document.createAttribute('id', idName);
  content.innerHTML = text;
  content.href = url;
  list.appendChild(content);
}

function fetchApi(limit, offset, callback) {
  return fetch(`https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`)
    .then((response) => response.json())
    .then((data) => callback(data));
}
function iterationList(obj) {
  obj.results.forEach((element) => {
    printOnPage('a', element.name, `${element.name}`, `./../detail/detail.html?pokemonName=${element.name}`);
  });
}
fetchApi(5, 5, iterationList);

function previousPage() {
  const oldLimit = new URLSearchParams(window.location.search).get('limit');
  const oldOffset = new URLSearchParams(window.location.search).get('offset');
  fetchApi(oldLimit, oldOffset - 10, iterationList);
}
function nextPage() {
  const oldLimit = new URLSearchParams(window.location.search).get('limit');
  const oldOffset = new URLSearchParams(window.location.search).get('offset');
  fetchApi(oldLimit, oldOffset + 10, iterationList);
}
