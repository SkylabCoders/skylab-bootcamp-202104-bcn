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
  const ul = createDomElements('ul', '', '', listDiv);
  createDomElements('li', 'Hedi', '', ul);
};

const createPokemonsDashboard = () => {
  const header = createDomElements('header', '', '', main);
  createDomElements('h1', 'Pokemons', '', header);
  createDomElements('h2', 'Some pokemons', '', header);
  createList();
};
createPokemonsDashboard();

// console.log(allPokemons);
