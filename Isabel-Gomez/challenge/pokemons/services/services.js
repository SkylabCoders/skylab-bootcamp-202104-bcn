// function fetchDashboardPokemons(url) {
//   return fetch(url).then((response) => response.json())
//     .then((data) => {
//       data.results.slice(2, 7).forEach((element) => {
//         const newElementLi = createElement('li', getDashboardList, '', 'pokemon-item');
//         const firstPokemonNames = createElement('a', newElementLi, `${element.name.toUpperCase()}`, null, `../../details/details.html?pokemonName=${element.name}`);
//       });
//     });
// }

const fetchDashboardPokemons = async () => {
  const url = 'https://pokeapi.co/api/v2/pokemon/?offset=20&limit=20';
  const response = await fetch(url);
  const data = await response.json();
  return data;
};

function fetchListPokemons(url) {
  return fetch(url).then((response) => response.json())
    .then((data) => {
      data.results.forEach((element) => {
        const newLi = createElement('li', getList, '', 'pokemon-item');
        const pokemonsNames = createElement('a', newLi, `${element.name.toUpperCase()}`, null, `../../details/details.html?pokemonName=${element.name}`);
      });
    });
}
