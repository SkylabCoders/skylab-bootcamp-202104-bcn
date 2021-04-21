const mainSection = document.querySelector('.main-container');

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
createElement('h3', mainSection, 'List Pokemons');
const getList = createElement('ul', mainSection, '');
const numberPage = 1;

const getAllPokemons = async (numPage) => {
  const pokemonList = await fetchPagePokemons(numPage);
  console.log('API', pokemonList);
  pokemonList.results.forEach((element) => {
    const newElementLi = createElement('li', getList, '', 'pokemon-item');
    createElement('a', newElementLi, `${element.name.toUpperCase()}`, 'pokemon-detail', `../../details/details.html?pokemonName=${element.name}`);
  });
};
getAllPokemons(0);

const clickPages = async (numberPage) => {
  const pokemonList = await fetchPagePokemons(numberPage);
  pokemonList.results.forEach((element, position) => {
    document.querySelectorAll('.pokemon-detail')[position].innerHTML = element.name.toUpperCase();
  });
};

const previousButton = createElement('button', mainSection, 'Previous', null);
const nextButton = createElement('button', mainSection, 'Next', null);

const onChangePage = (numberPage) => {
  previousButton.addEventListener('click', (event) => {
    event.preventDefault();
    if (numberPage >= 0) {
      clickPages(numberPage--);
    }
  });
  nextButton.addEventListener('click', (event) => {
    event.preventDefault();
    if (numberPage <= 5) {
      clickPages(numberPage++);
    }
  });
};
onChangePage(numberPage);
