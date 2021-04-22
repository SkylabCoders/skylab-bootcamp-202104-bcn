const main = document.querySelector('.pokemons');

const createHeader = () => {
  const header = createDomElements('header', '', '', main);
  createDomElements('h1', 'Pokemons - List', '', header);
  createDomElements('a', 'DASHBOARD', 'http://127.0.0.1:5500/challenge/pokemon/components/dashboard/dashboard.html', header);
};

const createList = () => {
  const pagination = 'https://pokeapi.co/api/v2/pokemon?offset=0&limit=15';

  const listDiv = createDomElements('div', '', '', main);
  const ul = createDomElements('ol', '', '', listDiv);

  getPokemonData(pagination).then((pokemons) => {
    pokemons.results.forEach((pokemon) => {
      const pokem = createDomElements('li', '', '', ul);
      createDomElements('a', `${pokemon.name}`, `http://127.0.0.1:5500/challenge/pokemon/components/details/details.html`, pokem);
    });
  });
};

const createPokemonsDashboard = () => {
  createHeader();
  createList();
};
createPokemonsDashboard();
