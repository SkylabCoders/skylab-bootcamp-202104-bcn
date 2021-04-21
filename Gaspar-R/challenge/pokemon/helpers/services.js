const url = 'https://pokeapi.co/api/v2/pokemon?limit=50&offset=0';

function fetchPokemonList(url) {
  return fetch(url)
    .then((response) => response.json());
}
