const pokemonsUrl = 'https://pokeapi.co/api/v2/pokemon/';

function fetchPokemons(url) {
  return fetch(url)
    .then((response) => response.json());
}

const pokemonsList = fetchPokemons(pokemonsUrl);
