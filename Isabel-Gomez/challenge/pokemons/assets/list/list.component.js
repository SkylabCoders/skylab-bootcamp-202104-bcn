const pokemonsList = fetchListPokemons('https://pokeapi.co/api/v2/pokemon/?offset=30&limit=30');
console.log('llamada a la API', pokemonsList);

const mainSection = document.querySelector('.main-container');

createElement('h1', mainSection, 'Pokemons');
createElement('a', mainSection, 'Dashboard', null, './../dashboard/dashboard.html');
createElement('a', mainSection, 'List', null, './../list/list.html');
createElement('h3', mainSection, 'List Pokemons');
const getList = createElement('ul', mainSection, '');
