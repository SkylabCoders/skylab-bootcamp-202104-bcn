const dashboard = document.getElementById('pokemon-detail');
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

const printPokemonDetail = (pokemon, detail) => {
  pokemon.then(({
    id, name, types, sprites,
  }) => {
    // const pokemon = createPokemon(id, name, types[0].type.name);
    const pokemonItem = createDomElement(detail, 'li', '', { class: 'list-pokemon--item' });
    const pokemonLink = createDomElement(pokemonItem, 'a', '', { href: `../pokemon-detail/pokemon-detail.html?id=${id}` });
    createDomElement(pokemonLink, 'img', '', { src: `${sprites.front_default}`, alt: `${name}` });
    createDomElement(pokemonItem, 'span', `#${id} ${name}`);
  });
};

const createDetail = () => {
  const detail = createDomElement(dashboard, 'ul');
  const params = new URLSearchParams(window.location.search);
  const pokeId = params.get('id');
  if (pokeId) {
    const pokemon = getPokemonById(pokeId);
    printPokemonDetail(pokemon, detail);
  } else {
    const pokeName = params.get('name');
    const pokemon = getPokemonById(pokeName);
    printPokemonDetail(pokemon, detail);
  }
};

const createNavigator = (parent) => {
  const headerNavigator = createDomElement(parent, 'nav', '', { class: 'header__main-navigator main-navigator' });
  const navigatorList = createDomElement(headerNavigator, 'ul', '', { class: 'main-navigator__list list' });
  const dashBoardLink = createDomElement(navigatorList, 'li', '', { class: 'list--item' });
  createDomElement(dashBoardLink, 'a', 'Dashboard', { href: '../dashboard/dashboard.html' });
  const pokemonsLink = createDomElement(navigatorList, 'li', '', { class: 'list--item' });
  createDomElement(pokemonsLink, 'a', 'Pokemons', { href: '../pokemons/pokemons.html' });
};

const createHeader = () => {
  const header = createDomElement(dashboard, 'header', '', { class: 'header' });
  createDomElement(header, 'h1', 'Pokemon Detail', { class: 'header--title' });
  createNavigator(header);
};
const createPokemonDetail = () => {
  createHeader();
  createDetail();
};

createPokemonDetail();
