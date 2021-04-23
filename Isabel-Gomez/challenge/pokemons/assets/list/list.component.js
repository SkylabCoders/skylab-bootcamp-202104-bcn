const mainSection = document.querySelector('main');
let offsetNum = 0;
const limitNum = 10;

const createElement = (tag, parent, innerHTML, className, href) => {
  const getTag = document.createElement(tag);
  getTag.innerHTML = innerHTML;
  parent.appendChild(getTag);
  getTag.classList.add(className);
  getTag.href = href;
  return getTag;
};

createElement('h1', mainSection, 'Pokedex', 'main-header');
const getList = createElement('ul', mainSection, null, 'list');

const getAllPokemons = async (offsetNum, limitNum) => {
  const pokemonList = await fetchPagePokemons(offsetNum, limitNum);
  pokemonList.results.forEach((element) => {
    const newElementLi = createElement('li', getList, '', 'pokemon-item');
    createElement('a', newElementLi, `${element.name.toUpperCase()}`, 'pokemon-item__detail', `../details/details.html?pokemonName=${element.name}`);
  });
};
getAllPokemons(0, 10);

const onChangePages = async (offsetNum, limitNum) => {
  const pokemonList = await fetchPagePokemons(offsetNum, limitNum);
  pokemonList.results.forEach((element, position) => {
    document.querySelectorAll('.pokemon-item__detail')[position].innerHTML = element.name.toUpperCase();
    document.querySelectorAll('.pokemon-item__detail')[position].href = `../details/details.html?pokemonName=${element.name}`;
  });
};

const buttonsForChangePage = () => {
  const containerbuttons = createElement('div', mainSection, null, 'container-buttons');
  const previousButton = createElement('button', containerbuttons, '<i class="fas fa-caret-square-left"></i>', 'container-buttons__previous');
  previousButton.onclick = () => {
    if (offsetNum >= 10) {
      onChangePages(offsetNum -= limitNum, limitNum);
    }
  };
  const nextButton = createElement('button', containerbuttons, '<i class="fas fa-caret-square-right"></i>', 'container-buttons__next');
  nextButton.onclick = () => {
    if (offsetNum >= 0) {
      onChangePages(offsetNum += limitNum, limitNum);
    }
  };
};
buttonsForChangePage();

const detailPhotoBall = createElement('div', mainSection, '', 'detail');
createElement('img', detailPhotoBall, '', 'detail__photo');
