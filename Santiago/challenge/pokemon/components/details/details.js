const allPokemons = getPokemonData();
const main = document.querySelector('.details');

const createHeader = () => {
  const header = createDomElements('header', '', '', main);
  createDomElements('h1', 'Pokemon - Details', '', header);
  createDomElements('a', 'DASHBOARD', 'http://127.0.0.1:5500/challenge/pokemon/components/dashboard/dashboard.html', header);
  createDomElements('a', 'ALL POKEMONS', 'http://127.0.0.1:5500/challenge/pokemon/components/pokemons/pokemons.html', header);
};

const createPokemonsDashboard = () => {
  createHeader();
};
createPokemonsDashboard();
