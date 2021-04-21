const pokemons = fetchPokemons('https://pokeapi.co/api/v2/pokemon/?offset=20&limit=20');
console.log('llamada a la API', pokemons);

const mainSection = document.querySelector('.main-container');

createElement('h1', mainSection, 'Pokemons');
createElement('a', mainSection, 'Dashboard', null, './../dashboard/dashboard.html');
createElement('a', mainSection, 'List', null, './../list/list.html');
createElement('h3', mainSection, 'Some Pokemons');
const getDashboardList = createElement('ul', mainSection, '');

// pokemons.results.then((info) => {
//   const getDashboardList = createElement('ul', mainSection, '');
//   info.slice(2, 6).forEach((element) => {
//     const newElementLi = createElement('li', getDashboardList, '', 'pokemon-item');
//     const firstPokemonNames = createElement('a', newElementLi, `${element.name}`, null, `../../details/details.html?pokemonName=${element.name}&pokemonID=${element.id}`);
//   });
// });
