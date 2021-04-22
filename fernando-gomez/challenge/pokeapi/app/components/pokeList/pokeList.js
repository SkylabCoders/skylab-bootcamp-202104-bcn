const main = document.querySelector('.main-container');
const DOMpokeList = document.querySelector('.pokeList');
let offset = 0;
const limit = 70;

const pokeElement = (tag, data) => {
  const element = document.createElement(tag);
  element.innerText = data;
  return element;
};

const pokemonAnchor = (pokemon) => {
  const anchor = document.createElement('a');
  anchor.setAttribute('href', `./../pokeDetail/pokeDetail.html?name=${pokemon.name}`);

  return anchor;
};

const removeAllChildNodes = (parent) => {
  while (parent.firstChild) {
    parent.removeChild(parent.firstChild);
  }
};

const setPokeImage = (pokemon) => {
  const pokeImage = document.createElement('img');
  const pokeAnchor = pokemonAnchor(pokemon);

  pokeImage.setAttribute('src', pokemon.sprites.front_default);
  pokeAnchor.appendChild(pokeImage);
  DOMpokeList.appendChild(pokeAnchor);
};

const pokeList = (pokemon) => {
  getPokemonData(pokemon.name, setPokeImage);
};

const nextButton = () => {
  const button = pokeElement('button', 'Next');
  button.setAttribute('onclick', 'increaseOffset()');

  return button;
};

const increaseOffset = () => {
  if (offset < 1048) {
    offset += 70;
    removeAllChildNodes(DOMpokeList);
    getPokeApiData(offset, limit, pokeList);
  }
};

const decreaseOffset = () => {
  if (offset > 0) {
    offset -= 70;
    removeAllChildNodes(DOMpokeList);
    getPokeApiData(offset, limit, pokeList);
  }
};

const previousButton = () => {
  const button = pokeElement('button', 'Previous');

  button.setAttribute('onclick', 'decreaseOffset()');
  getPokeApiData(offset, limit, pokeList);

  return button;
};

main.appendChild(pokeElement('h1', 'Los pokemos'));
main.appendChild(previousButton());
main.appendChild(nextButton());
getPokeApiData(-70, 70, pokeList);
