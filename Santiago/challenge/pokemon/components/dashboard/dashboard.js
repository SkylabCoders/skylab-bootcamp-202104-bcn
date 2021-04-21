const allPokemons = getPokemonData();
const main = document.querySelector('.dashboard');

allPokemons.then((pokemons) => console.log(pokemons.results.name));

allPokemons.then((data) => data.results.forEach((element) => console.log(element.name)));

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

// const createList = () => {
//   const listDiv = createDomElements('div', '', '', main);
//   const ul = createDomElements('ul', '', '', listDiv);

//   const pokem = createDomElements('li', '', '', ul);
//   createDomElements('a', 'hedi', '', pokem);
// };

const createPokemonsDashboard = () => {
  const header = createDomElements('header', '', '', main);
  createDomElements('h1', 'Pokemons - Dashboard', '', header);
  createDomElements('h2', 'Pokemons', '', header);
//   createList();
};
createPokemonsDashboard();
