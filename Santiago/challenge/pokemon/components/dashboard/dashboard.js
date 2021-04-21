const allPokemons = getPokemonData();
const main = document.querySelector('.dashboard');

const createHeader = () => {
  const header = createDomElements('header', '', '', main);
  createDomElements('h1', 'Pokemons - Dashboard', '', header);
  createDomElements('a', 'ALL POKEMON', 'http://127.0.0.1:5500/challenge/pokemon/components/pokemons/pokemons.html', header);
};

const createList = () => {
  const listDiv = createDomElements('div', '', '', main);
  const ul = createDomElements('ol', '', '', listDiv);

  allPokemons.then((pokemons) => pokemons.results);
  allPokemons.then((data) => data.results.slice(0, 5).forEach((element) => {
    const pokem = createDomElements('li', '', '', ul);
    createDomElements('a', `${element.name}`, 'http://127.0.0.1:5500/challenge/pokemon/components/details/details.html', pokem);
  }));
};

const createPokemonsDashboard = () => {
  createHeader();
  createList();
};
createPokemonsDashboard();
