const urlList = 'https://pokeapi.co/api/v2/pokemon?limit=50&offset=0';
// const urlDetail =

function fetchPokemon(url) {
  return fetch(url)
    .then((response) => response.json());
}

// const pokemonList = fetchPokemon(urlList);

// --------access to pokemons details---------- */

// const pokemonDetails = pokemonList.then((data) => data.results.forEach((element) => {
//   fetchPokemon(element.url); {
//     return fetch(element.url)
//       .then((response) => response.json());
//   }
// }));

// const fetchData = (url) => fetch(url).then((response) => response.json());
