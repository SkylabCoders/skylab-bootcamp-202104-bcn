const allPokemons = getPokemonData();
const main = document.querySelector('.dashboard');

const createList = () => {
  const listDiv = createDomElements('div', '', '', main);
  const ul = createDomElements('ol', '', '', listDiv);

  allPokemons.then((pokemons) => pokemons.results);
  allPokemons.then((data) => data.results.forEach((element) => {
    const pokem = createDomElements('li', '', '', ul);
    createDomElements('a', `${element.name}`, '', pokem);
  }));
};

const createPokemonsDashboard = () => {
  const header = createDomElements('header', '', '', main);
  createDomElements('h1', 'Pokemons - Dashboard', '', header);
  createDomElements('h2', 'Pokemons', '', header);
  createList();
};
createPokemonsDashboard();
