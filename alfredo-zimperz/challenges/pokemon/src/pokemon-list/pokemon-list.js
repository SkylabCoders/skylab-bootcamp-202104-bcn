const POKEMON_LIST_BASE_URL = 'https://pokeapi.co/api/v2/';
const MAIN_ELEMENT = document.querySelector('main');

const listPagination = { offset: 0, limit: 20 };

createElement('h1', null, 'Pokemon list', MAIN_ELEMENT);
const pokemonListUl = createElement('ul', 'pokemon-list', null, MAIN_ELEMENT);

const getPokemonList = (offset, limit) => {
  const paginatedURL = `${POKEMON_LIST_BASE_URL}pokemon?limit=${listPagination.limit}
  &offset=${listPagination.offset}`;

  pokemonListUl.innerHTML = '';

  fetchData(paginatedURL).then((pokemons) => {
    pokemons.results.forEach((pokemon) => {
      const pokemonListLi = createElement('li', 'pokemon-list__item');
      const pokemonListA = createElement('a', null, pokemon.name);
      pokemonListA.href = `./../pokemon-detail/?name=${pokemon.name}`;
      pokemonListLi.appendChild(pokemonListA);
      pokemonListUl.appendChild(pokemonListLi);
    });
  });
};

getPokemonList(listPagination.offset, listPagination.limit);

createElement('footer', 'footer', null, MAIN_ELEMENT);
createElement('button', 'footer_button--back', 'back', getElementByClassName('footer'));
const backButton = getElementByClassName('footer_button--back');
backButton.onclick = () => {
  listPagination.offset >= 20 ? listPagination.offset -= 20 : null;
  getPokemonList(listPagination.offset, listPagination.limit);
};
createElement('button', 'footer_button--next', 'next', getElementByClassName('footer'));
const nextButton = getElementByClassName('footer_button--next');
nextButton.onclick = () => {
  listPagination.offset += 20;
  getPokemonList(listPagination.offset, listPagination.limit);
};
