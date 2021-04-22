const dashboard = document.getElementById('pokemons');
function createDomElement(parent, element, text = null, attributes = []) {
  const elementToCreate = document.createElement(element);
  if (text) {
    elementToCreate.innerText = text;
  }

  if (attributes) {
    Object.entries(attributes).map(([attrubute, value]) => {
      elementToCreate.setAttribute(attrubute, value);
    });
  }
  parent.appendChild(elementToCreate);
  return elementToCreate;
}

const pokemonList = (limit, offset) => {
  const pokemonsPaginated = getPaginatedPokemons(limit, offset);
  pokemonsPaginated.then((data) => {
    const pokemons = data.results;
    pokemons.forEach((pokemon) => {
      console.log(pokemon);
    });
    // const pokemon = createPokemon(id, name, types[0].type.name);
    // const pokemonItem = createDomElement(topPokemons, 'li', '', { class: 'list-pokemon--item' });
    // const pokemonLink = createDomElement(pokemonItem, 'a', '', { href: `../pokemon-detail.html?id=${id}` });
    // createDomElement(pokemonLink, 'img', '', { src: `${sprites.front_default}`, alt: `${name}` });
    // createDomElement(pokemonItem, 'span', `#${id} ${name}`);
  });
};

const createNavigator = (parent) => {
  const headerNavigator = createDomElement(parent, 'nav', '', { class: 'header__main-navigator main-navigator' });
  const navigatorList = createDomElement(headerNavigator, 'ul', '', { class: 'main-navigator__list list' });
  const dashBoardLink = createDomElement(navigatorList, 'li', '', { class: 'list--item' });
  createDomElement(dashBoardLink, 'a', 'Dashboard', { href: '../dashboard/dashboard.html' });
  const pokemonsLink = createDomElement(navigatorList, 'li', '', { class: 'list--item' });
  createDomElement(pokemonsLink, 'a', 'Pokemons', { href: '#' });
};

const createHeader = () => {
  const header = createDomElement(dashboard, 'header', '', { class: 'header' });
  createDomElement(header, 'h1', 'Pokemons List', { class: 'header--title' });
  createNavigator(header);
};
const createPokemonsList = () => {
  createHeader();
  pokemonList(0, 10);
};

createPokemonsList();
