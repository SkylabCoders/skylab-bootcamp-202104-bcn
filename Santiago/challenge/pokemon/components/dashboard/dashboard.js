const allPokemons = getPokemonData();
const main = document.querySelector('.dashboard');

const createDomElements = (element, text, href, parent, id) => {
  const elementToCreate = document.createElement(element);
  if (text) {
    elementToCreate.innerText = text;
  }
  if (href) {
    elementToCreate.setAttribute('href', href);
  }
  if (id) {
    elementToCreate.setAttribute('id', id);
  }
  parent.appendChild(elementToCreate);
  return elementToCreate;
};

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
