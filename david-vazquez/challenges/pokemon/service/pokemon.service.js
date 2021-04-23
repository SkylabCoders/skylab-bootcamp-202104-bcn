/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
function createHtmlElements(parent, element, classname, text) {
  const node = document.createElement(element);
  parent.appendChild(node);
  node.className = classname;
  node.innerText = text;
  return node;
}

function getDataPokemon(name) {
  return fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
    .then((response) => response.json())
    .then((data) => data)
    .catch(() => { console.error('-> error!'); });
}

function getDataUrl(url) {
  return fetch(url)
    .then((response) => response.json())
    .catch(() => { console.error('-> error!'); });
}
