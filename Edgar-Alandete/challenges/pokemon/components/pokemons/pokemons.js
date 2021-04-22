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

const pokemonList = (page, limit, offset) => {
  const pokemonsPaginated = getPaginatedPokemons(limit, offset);
  pokemonsPaginated.then((data) => {
    const pokemons = data.results;
    const { previous, next } = data;
    pokemons.forEach(({
      name,
    }) => {
      const pokemonItem = createDomElement(page, 'li', '', { class: 'list-pokemon--item' });
      // const pokemonLink = createDomElement(pokemonItem, 'a', '', { href: `../pokemon-detail/pokemon-detail.html?id=${id}` });
      // createDomElement(pokemonLink, 'img', '', { src: `${sprites.front_default}`, alt: `${name}` });
      createDomElement(pokemonItem, 'span', `${name}`);
    });

    createDomElement(page, 'a', 'Anterior', { href: previous });
    createDomElement(page, 'a', 'Siguiente', { href: next });
  });
};

const createPokemonPaginatedList = () => {
  const paginatedPokemonsSection = createDomElement(dashboard, 'section', '', { class: 'paginated-pokemons' });
  createDomElement(paginatedPokemonsSection, 'h2', 'Pokemons', { class: 'paginated-pokemons--title' });
  const page = createDomElement(paginatedPokemonsSection, 'ul', '', { class: 'paginated-pokemons__list-pokemon list-pokemon' });
  pokemonList(page, 10, 0);
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
  createPokemonPaginatedList();
};

createPokemonsList();
