const mainSection = document.querySelector('.main-container');

const param = new URLSearchParams(location.search);
const pokemonName = param.get('pokemonName');

const createElement = (tag, parent, innerHTML, className, href) => {
  const getTag = document.createElement(tag);
  getTag.innerHTML = innerHTML;
  parent.appendChild(getTag);
  getTag.classList.add(className);
  getTag.href = href;
  return getTag;
};

createElement('h1', mainSection, 'Pokedex');

const getDetails = async (name) => {
  const pokemonList = await fetchDetailsPokemon(name);
  const getList = createElement('ul', mainSection, '', 'list');
  createElement('li', getList, `Id: ${pokemonList.id}`, 'pokemon-item');
  createElement('li', getList, `Height: ${pokemonList.height}`, 'pokemon-item');
  createElement('li', getList, `Weight: ${pokemonList.weight}`, 'pokemon-item');
  createElement('li', getList, `Ability: ${pokemonList.abilities[0].ability.name}`, 'pokemon-item');
  const urlFrontPhoto = pokemonList.sprites.front_default;
  const getLiForFrontPhoto = createElement('li', getList, null, 'pokemon-item');
  createElement('img', getLiForFrontPhoto).setAttribute('src', urlFrontPhoto);
  const urlBackPhoto = pokemonList.sprites.back_default;
  const getLiForBackPhoto = createElement('li', getList, null, 'pokemon-item');
  createElement('img', getLiForBackPhoto).setAttribute('src', urlBackPhoto);
};
getDetails(pokemonName);

const createDivContainer = () => {
  const container = createElement('div', mainSection, '', 'container');
  createElement('a', container, 'Back', 'container__back', './../list/list.html');
};
createDivContainer();
