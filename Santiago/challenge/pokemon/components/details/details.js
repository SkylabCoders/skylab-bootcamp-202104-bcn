const allPokemons = getPokemonData();
const main = document.querySelector('.details');

const createHeader = () => {
  const header = createDomElements('header', '', '', main);
  createDomElements('h1', 'Pokemon - Details', '', header);
  createDomElements('a', 'DASHBOARD', 'http://127.0.0.1:5500/challenge/pokemon/components/dashboard/dashboard.html', header);
  createDomElements('a', 'ALL POKEMONS', 'http://127.0.0.1:5500/challenge/pokemon/components/pokemons/pokemons.html', header);
};

const obtainDetails = () => {
  const allDetails = createDomElements('div', '', '', main);
  const pokName = createDomElements('p', '', '', allDetails);
  const paramName = new URLSearchParams(location.search);
  const pokemonName = paramName.get('pokemonName');
  pokName.innerHTML = `name: ${pokemonName}`;
};

const createPokemonsDashboard = () => {
  createHeader();
  obtainDetails();
};
createPokemonsDashboard();
