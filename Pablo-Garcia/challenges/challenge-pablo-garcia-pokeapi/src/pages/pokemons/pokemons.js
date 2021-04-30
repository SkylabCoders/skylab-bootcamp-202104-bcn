const POKEMON_LIST_BASE_URL = 'https://pokeapi.co/api/v2/';
const POKEMON_URL = 'pokemon/';

const MAIN_ELEMENT = document.querySelector('main');
const listPagination = { offset: 0, limit: 6 };

const logo = createElement('img', 'logo', null, MAIN_ELEMENT);
logo.src = './../images/pokemon-logo.png';
const paginatedURL = `${POKEMON_LIST_BASE_URL}pokemon?limit=${listPagination.limit}&offset=${listPagination.offset}`;
pokemonListUl.innerHTML = '';

fetchData(paginatedURL).then((pokemons) => {

  const dataPokemons = await fetchData(paginatedURL);

  dataPokemons.results.forEach(async (pokemon) => {
    await getPokemonDetails(pokemon.name);
  });
});



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


