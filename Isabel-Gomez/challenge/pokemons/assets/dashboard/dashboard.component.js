const pokemons = fetchDashboardPokemons('https://pokeapi.co/api/v2/pokemon/?offset=20&limit=20');
console.log('llamada a la API', pokemons);

const mainSection = document.querySelector('.main-container');

createElement('h1', mainSection, 'Pokemons');
createElement('a', mainSection, 'Dashboard', null, './../dashboard/dashboard.html');
createElement('a', mainSection, 'List', null, './../list/list.html');
createElement('h3', mainSection, 'Top 5 Pokemons');
const getDashboardList = createElement('ul', mainSection, '');
