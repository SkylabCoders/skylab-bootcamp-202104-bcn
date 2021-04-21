const main = document.querySelector('.main-container');
const offset = 0;
const limit = 1118;

const pokeElement = (tag, data) => {
  const element = document.createElement(tag);
  element.innerText = data;
  return element;
};

const pokemonAnchor = (pokemon) => {
  const listElement = document.createElement('li');
  const anchor = pokeElement('a', pokemon.name);
  anchor.setAttribute('href', `./../pokeDetail/pokeDetail.html?name=${pokemon.name}`);
  listElement.appendChild(anchor);

  return listElement;
};

const nextButton = () => {
  const button = pokeElement('button', 'Next');

  button.setAttribute('onclick', 'increaseOffset()');
  getPokeApiData(offset, limit, pokeList);

  return button;
};

const previousButton = () => {
  const button = pokeElement('button', 'Previous');

  button.setAttribute('onclick', 'decreaseOffset()');
  getPokeApiData(offset, limit, pokeList);

  return button;
};

const pokeList = (pokemon) => {
  const pokemonDetails = document.createElement('ul');
  const pokeAnchor = pokemonAnchor(pokemon);

  pokemonDetails.appendChild(pokeAnchor);
  main.appendChild(pokemonDetails);
};

main.appendChild(pokeElement('h1', 'List of pokemons'));
main.appendChild(nextButton());
main.appendChild(previousButton());
getPokeApiData(offset, limit, pokeList);
