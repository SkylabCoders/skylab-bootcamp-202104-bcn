const dashboard = document.getElementById('dashboard');
const pokemons = [6, 196, 25, 149];
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

function createPokemon(id, name, type) {
  return {
    id,
    name,
    type,
    moves: '',
    getMoves: (pokemonId) => {
      if (!moves) {
        const pokemonMoves = getMovesFromPokemonByID(pokemonId);
        console.log(pokemonMoves);
      }
    },
  };
}

const createTopPokemonList = (topPokemons) => {
  pokemons.forEach((pokemonId) => {
    const pokemon = getPokemonById(pokemonId);
    pokemon.then(({
      id, name, types, sprites,
    }) => {
      // const pokemon = createPokemon(id, name, types[0].type.name);
      const pokemonItem = createDomElement(topPokemons, 'li', '', { class: 'list-pokemon--item' });
      const pokemonLink = createDomElement(pokemonItem, 'a', '', { href: `../pokemon-detail.html?id=${id}` });
      createDomElement(pokemonLink, 'img', '', { src: `${sprites.front_default}`, alt: `${name}` });
      createDomElement(pokemonItem, 'span', `#${id} ${name}`);
    });
  });
};

const createMostUsedPokemonsSection = () => {
  const mostUsedPokemons = createDomElement(dashboard, 'section', '', { class: 'top-pokemons' });
  createDomElement(mostUsedPokemons, 'h2', 'Top Pokemons', { class: 'top-pokemons--title' });
  const topPokemons = createDomElement(mostUsedPokemons, 'ul', '', { class: 'top-pokemons__list-pokemon list-pokemon' });
  createTopPokemonList(topPokemons);
};

const createNavigator = (parent) => {
  const headerNavigator = createDomElement(parent, 'nav', '', { class: 'header__main-navigator main-navigator' });
  const navigatorList = createDomElement(headerNavigator, 'ul', '', { class: 'main-navigator__list list' });
  const dashBoardLink = createDomElement(navigatorList, 'li', '', { class: 'list--item' });
  createDomElement(dashBoardLink, 'a', 'Dashboard', { href: '#' });
  const pokemonsLink = createDomElement(navigatorList, 'li', '', { class: 'list--item' });
  createDomElement(pokemonsLink, 'a', 'Pokemons', { href: '../pokemons/pokemons.html' });
};

const createHeader = () => {
  const header = createDomElement(dashboard, 'header', '', { class: 'header' });
  createDomElement(header, 'h1', 'Pokemon Dashboard', { class: 'header--title' });
  createNavigator(header);
};
const createDashboard = () => {
  createHeader();
  createMostUsedPokemonsSection();
};

createDashboard();
