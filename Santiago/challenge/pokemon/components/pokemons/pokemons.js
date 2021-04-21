const allPokemons = getPokemonData();
const main = document.querySelector('.pokemons');

const createHeader = () => {
  const header = createDomElements('header', '', '', main);
  createDomElements('h1', 'Pokemons - List', '', header);
  createDomElements('a', 'DASHBOARD', 'http://127.0.0.1:5500/challenge/pokemon/components/dashboard/dashboard.html', header);
};

const createList = () => {
  const listDiv = createDomElements('div', '', '', main);
  const ul = createDomElements('ol', '', '', listDiv);

  allPokemons.then((pokemons) => pokemons.results);
  allPokemons.then((data) => data.results.forEach((element) => {
    const pokem = createDomElements('li', '', '', ul);
    createDomElements('a', `${element.name}`, `http://127.0.0.1:5500/challenge/pokemon/components/details/details.html?pokemonName=${element.name}`, pokem);
  }));
};

const createPokemonsDashboard = () => {
  createHeader();
  createList();
};
createPokemonsDashboard();
