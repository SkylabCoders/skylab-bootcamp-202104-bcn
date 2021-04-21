const POKEMON_LIST_BASE_URL = 'https://pokeapi.co/api/v2/';
const listPagination = { offset: 0, limit: 100 };
const paginatedURL = `${POKEMON_LIST_BASE_URL}pokemon?limit=${listPagination.limit}
&offset=${listPagination.offset}`;
console.log('url', paginatedURL);

const pokemonList = fetchData(paginatedURL);

pokemonList.then((pokemons) => {
  console.log(pokemons);
});
