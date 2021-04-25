const MAIN_ELEMENT = document.querySelector('main');
const POKEMON_NAME = new URLSearchParams(window.location.search).get('name');
const POKEMON_LIST_BASE_URL = 'https://pokeapi.co/api/v2/';

const pokemonURL = `${POKEMON_LIST_BASE_URL}pokemon/${POKEMON_NAME}`;

const pokemonData = fetchData(pokemonURL);

pokemonData.then((pokemon) => {
  createElement('h1', null, `${pokemon.name} detail`, MAIN_ELEMENT);
  const pokemonDetailImage = createElement('img', 'pokemon-detail__img', null);
  pokemonDetailImage.src = pokemon.sprites.front_default;
  MAIN_ELEMENT.appendChild(pokemonDetailImage);
});
