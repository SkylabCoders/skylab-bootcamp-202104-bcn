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

function paginate(url = null) {
  let rowspercall = 10;
  let currentIndex = 0;
  const page = document.getElementById('pokemon-list');
  if (url) {
    const urlToparse = new URL(url);
    const params = new URLSearchParams(urlToparse.search);
    rowspercall = parseInt(params.get('limit'));
    currentIndex = parseInt(params.get('offset'));
  }

  pokemonList(page, rowspercall, currentIndex);
}

const pokemonList = (page, limit, offset) => {
  while (page.firstChild) {
    page.removeChild(page.firstChild);
  }

  const pokemonsPaginated = getPokemons(limit, offset);
  pokemonsPaginated.then((data) => {
    const pokemons = data.results;
    const { previous, next } = data;
    pokemons.forEach(({
      name,
    }) => {
      const pokemonItem = createDomElement(page, 'li', '', { class: 'list-pokemon--item' });
      createDomElement(pokemonItem, 'a', `${name}`, { href: `../pokemon-detail/pokemon-detail.html?name=${name}` });
    });

    const prevButton = createDomElement(page, 'button', 'Anterior');
    const nextButton = createDomElement(page, 'button', 'Siguiente');

    prevButton.onclick = (() => paginate(previous));
    nextButton.onclick = (() => paginate(next));
  });
};

const createPokemonPaginatedList = () => {
  const paginatedPokemonsSection = createDomElement(dashboard, 'section', '', { class: 'paginated-pokemons' });
  createDomElement(paginatedPokemonsSection, 'h2', 'Pokemons', { class: 'paginated-pokemons--title' });
  createDomElement(paginatedPokemonsSection, 'ul', '', { class: 'paginated-pokemons__list-pokemon list-pokemon', id: 'pokemon-list' });
  paginate();
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
