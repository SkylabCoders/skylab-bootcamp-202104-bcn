const main = document.querySelector('.pokemons');
const pagedList = { offset: 0, limit: 20 };

const createHeader = () => {
  const header = createDomElements('header', '', '', main);
  createDomElements('h1', 'Pokemons - List', '', header);
  createDomElements('a', 'DASHBOARD', 'http://127.0.0.1:5500/challenge/pokemon/components/dashboard/dashboard.html', header);
};
createHeader();

const listDiv = createDomElements('div', '', '', main);
const ul = createDomElements('ul', '', '', listDiv);

const createList = () => {
  const pagination = `https://pokeapi.co/api/v2/pokemon?limit=${pagedList.limit}&offset=${pagedList.offset}`;

  ul.innerHTML = '';

  getPokemonData(pagination).then((pokemons) => {
    pokemons.results.forEach((pokemon) => {
      const pokem = createDomElements('li', '', '', ul);
      createDomElements('a', `${pokemon.name}`, `./../details/?name=${pokemon.name}`, pokem);
    });
  });
};

const createButtons = () => {
  const foot = createDomElements('footer', '', '', main);
  const btnBack = createDomElements('button', 'back', '', foot);

  btnBack.onclick = () => {
    if (pagedList.offset >= 20) {
      pagedList.offset -= 20;
      createList(pagedList.offset, pagedList.limit);
    }
  };
  const btnNext = createDomElements('button', 'next', '', foot);
  btnNext.onclick = () => {
    pagedList.offset += 20;
    createList(pagedList.offset, pagedList.limit);
  };
};

const createPokemonsDashboard = () => {
  createList(pagedList.offset, pagedList.limit);
  createButtons();
};
createPokemonsDashboard();
