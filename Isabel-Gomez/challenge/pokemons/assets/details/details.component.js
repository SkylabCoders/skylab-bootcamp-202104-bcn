const mainSection = document.querySelector('.main-container');

const param = new URLSearchParams(location.search);
const pokemonId = param.get('pokemonId');
console.log('pokemonId', pokemonId);

const createElement = (tag, parent, innerHTML, className, href) => {
  const getTag = document.createElement(tag);
  getTag.innerHTML = innerHTML;
  parent.appendChild(getTag);
  getTag.classList.add(className);
  getTag.href = href;
  return getTag;
};

createElement('h1', mainSection, 'Pokemons');
createElement('a', mainSection, 'Dashboard', null, './../dashboard/dashboard.html');
createElement('a', mainSection, 'List', null, './../list/list.html');

const getDetails = async (id) => {
  const pokemonList = await fetchDetailsPokemon(id);
  console.log('API', pokemonList);

  createElement('h3', mainSection, `${pokemonList.name.toUpperCase()} details!`);
  const getContainer = createElement('div', mainSection, '');
  const getList = createElement('ul', getContainer, '');
  createElement('li', getList, `Height: ${pokemonList.height}`);
  createElement('li', getList, `Weight: ${pokemonList.weight}`);
  pokemonList.abilities.forEach((element) => {
    createElement('li', getList, `Ability: ${element.ability.name}`);
  });
  pokemonList.game_indices.forEach((element) => {
    createElement('li', getList, `Game indices: ${element.game_index} - ${element.version.name}`);
  });
};
getDetails(pokemonId);

createElement('a', mainSection, 'Back', null, './../list/list.html');
