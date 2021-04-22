const mainSection = document.querySelector('.main-container');

const param = new URLSearchParams(location.search);
const pokemonName = param.get('pokemonName');
console.log('pokemonName', pokemonName);

const createElement = (tag, parent, innerHTML, className, href) => {
  const getTag = document.createElement(tag);
  getTag.innerHTML = innerHTML;
  parent.appendChild(getTag);
  getTag.classList.add(className);
  getTag.href = href;
  return getTag;
};

createElement('h1', mainSection, 'Pokemons');

const getDetails = async (name) => {
  const pokemonList = await fetchDetailsPokemon(name);
  console.log('API details', pokemonList);
  createElement('h3', mainSection, `${pokemonList.name.toUpperCase()} details!`);
  const getContainer = createElement('div', mainSection, '');
  const getList = createElement('ul', getContainer, '');
  createElement('li', getList, `Height: ${pokemonList.height}`);
  createElement('li', getList, `Weight: ${pokemonList.weight}`);
  createElement('li', getList, `Ability: ${pokemonList.abilities[0].ability.name}`);
};
getDetails(pokemonName);

createElement('a', mainSection, 'Back', null, './../list/list.html');
