/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
const main = document.querySelector('.main-container');
const DOMpokeList = document.querySelector('.pokeList');
let offset = 0;
const limit = 70;

const buttonsContainer = () => {
  const container = document.createElement('div');
  container.classList = 'buttons';

  return container;
};

const buttons = buttonsContainer();

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
  button.classList = 'nextButton';

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
  button.classList = 'previousButton';

  getPokeApiData(offset, limit, pokeList);

  return button;
};

main.appendChild(pokeElement('h1', 'Los pokemos'));
buttons.appendChild(previousButton());
buttons.appendChild(nextButton());
main.appendChild(buttons);
getPokeApiData(-70, 70, pokeList);
