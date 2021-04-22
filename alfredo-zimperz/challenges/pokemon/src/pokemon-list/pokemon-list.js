const POKEMON_LIST_BASE_URL = 'https://pokeapi.co/api/v2/';
const POKEMON_URL = 'pokemon/';
const MAIN_ELEMENT = document.querySelector('main');
const listPagination = { offset: 0, limit: 20 };

createElement('h1', null, 'Pokemon list', MAIN_ELEMENT);
const pokemonListUl = createElement('ul', 'pokemon-list', null, MAIN_ELEMENT);

const getPokemonDetails = async function (pokemonName) {
  const pokemonInfo = await fetchData(POKEMON_LIST_BASE_URL + POKEMON_URL + pokemonName);
  const pokemonListLi = createElement('li', 'pokemon-list__item');
  const pokemonListA = createElement('a', 'list-item__a');
  pokemonListA.href = `./../pokemon-detail/?name=${pokemonName}`;
  const pokemonListImg = createElement('img', 'list-item__img');
  pokemonListImg.src = pokemonInfo.sprites.front_default;
  const pokemonListP = createElement('p', 'list-item__img', pokemonName);
  pokemonListLi.appendChild(pokemonListA);
  pokemonListA.appendChild(pokemonListImg);
  pokemonListA.appendChild(pokemonListP);
  pokemonListUl.appendChild(pokemonListLi);
};

const getPokemonList = async function (offset, limit) {
  const paginatedURL = `${POKEMON_LIST_BASE_URL}pokemon?limit=${listPagination.limit}
  &offset=${listPagination.offset}`;

  pokemonListUl.innerHTML = '';

  const pokemons = await fetchData(paginatedURL);

  pokemons.results.forEach(async (pokemon) => {
    await getPokemonDetails(pokemon.name);
  });
};

getPokemonList(listPagination.offset, listPagination.limit);

createElement('footer', 'footer', null, MAIN_ELEMENT);
createElement('button', 'footer_button--back', 'back', getElementByClassName('footer'));
const backButton = getElementByClassName('footer_button--back');
backButton.onclick = () => {
  if (listPagination.offset >= 20) {
    listPagination.offset -= 20;
    getPokemonList(listPagination.offset, listPagination.limit);
  }
};
createElement('button', 'footer_button--next', 'next', getElementByClassName('footer'));
const nextButton = getElementByClassName('footer_button--next');
nextButton.onclick = () => {
  listPagination.offset += 20;
  getPokemonList(listPagination.offset, listPagination.limit);
};
