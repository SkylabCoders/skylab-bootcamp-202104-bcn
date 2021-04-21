function getPokeApiData(offset, limit, callBack) {
  fetch(`https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`)
    .then((response) => response.json())
    .then((data) => data.results.forEach((pokemon) => callBack(pokemon)));
}

function getPokemonData(pokemonName, callBack) {
  fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
    .then((response) => response.json())
    .then((data) => callBack(data));
}
