const mainSection = document.querySelector('.main-container');
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

createElement('h1', mainSection, 'Pokemons');
createElement('h3', mainSection, 'Choose your Pokemon!');
const getList = createElement('ul', mainSection, '');

const getAllPokemons = async (offsetNum, limitNum) => {
  const pokemonList = await fetchPagePokemons(offsetNum, limitNum);
  console.log('API global', pokemonList);
  pokemonList.results.forEach((element) => {
    const newElementLi = createElement('li', getList, '', 'pokemon-item');
    createElement('a', newElementLi, `${element.name.toUpperCase()}`, 'pokemon-item__detail', `../details/details.html?pokemonName=${element.name}`);
  });
};
getAllPokemons(0, 10);

const clickPages = async (offsetNum, limitNum) => {
  const pokemonList = await fetchPagePokemons(offsetNum, limitNum);
  pokemonList.results.forEach((element, position) => {
    document.querySelectorAll('.pokemon-item__detail')[position].innerHTML = element.name.toUpperCase();
    document.querySelectorAll('.pokemon-item__detail')[position].href = `../details/details.html?pokemonName=${element.name}`;
  });
};

const onChangePage = () => {
  const previousButton = createElement('button', mainSection, 'Previous', null);
  previousButton.onclick = () => {
    if (offsetNum >= 10) {
      clickPages(offsetNum -= limitNum, limitNum);
    }
  };
  const nextButton = createElement('button', mainSection, 'Next', null);
  nextButton.onclick = () => {
    if (offsetNum >= 0) {
      clickPages(offsetNum += limitNum, limitNum);
    }
  };
};
onChangePage();
