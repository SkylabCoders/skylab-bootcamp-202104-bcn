function getPokeData() {
  return fetch('https://pokeapi.co/api/v2/pokemon?offset=20&limit=20')
    .then((pokemon) => pokemon.json())
    .catch((e) => { console.error('-> lean bastardos!', e); });
}

function createElements(tag, parent, className, text) {
  const creationTag = document.createElement(tag);
  parent.appendChild(creationTag);
  creationTag.className = className;
  creationTag.innerText = text;
  return creationTag;
}
