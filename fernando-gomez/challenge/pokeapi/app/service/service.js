/* eslint-disable no-unused-vars */
function getPokeApiData(offset, limit, callBack) {
  fetch(`https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`)
    .then((response) => {
      if (response.ok) {
        return response.json();
      }
      throw new Error('Something failed', response.Error);
    })
    .then((data) => data.results.forEach((pokemon) => callBack(pokemon)));
}

function getPokemonData(pokemonName, callBack) {
  fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
    .then((response) => response.json())
    .then((data) => callBack(data));
}
