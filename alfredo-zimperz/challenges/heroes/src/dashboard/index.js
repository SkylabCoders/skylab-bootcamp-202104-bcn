const HEROES_LIST = fetchData('../../store/superHeroData.json');

const NAV_LIST_ELEMENTS = [
  {
    name: 'dashboard',
    url: '../dashboard/',
  },
  {

    name: 'hero-list',
    url: '../hero-list/',

  },
];
const APP_ELEMENT = document.querySelector('.app');

// --- Create header
const header = document.createElement('header');
header.classList.add('header');
const headerH1 = document.createElement('h1');
headerH1.innerText = 'Tour of Heroes';
const nav = document.createElement('nav');
nav.classList.add('nav');
const navList = document.createElement('ul');
navList.classList.add('nav-list');

NAV_LIST_ELEMENTS.forEach((element) => {
  const navLi = document.createElement('li');
  navLi.classList.add('nav-list__item');
  const navLink = document.createElement('a');
  navLink.classList.add('item__link');
  navLink.innerText = element.name;
  navLink.href = element.url;
  navLi.appendChild(navLink);
  navList.appendChild(navLink);
});

nav.appendChild(navList);
header.appendChild(nav);
header.appendChild(headerH1);
APP_ELEMENT.appendChild(header);
// --- End header

// -- Create Top Heroes section
// const handleClick = (id) => {
//   sessionStorage.setItem('hero-id', id);
//   window.location.replace('/alfredo-zimperz/challenges/heroes/src/hero-detail/');
// };
const topHeroesSection = document.createElement('section');
topHeroesSection.classList.add('top-heroes');
const topHeroesH2 = document.createElement('h2');
topHeroesH2.innerText = 'Top Heroes';
const topHeroesList = document.createElement('ul');
topHeroesList.classList.add('heroes-list');

HEROES_LIST.then((heroes) => {
  heroes.splice(0, 4).forEach((hero) => {
    const liElement = document.createElement('li');
    liElement.classList.add('heroes-list_item');
    liElement.setAttribute('id', hero.id);
    // const buttonElement = document.createElement('button');
    // buttonElement.onclick = () => handleClick(hero.id);
    // buttonElement.innerText = hero.name;
    const buttonElement = document.createElement('a');
    buttonElement.href = `../hero-detail/?heroId=${hero.id}`;
    buttonElement.innerText = hero.name;
    liElement.appendChild(buttonElement);
    topHeroesList.appendChild(liElement);
  });
});
topHeroesSection.appendChild(topHeroesH2);
topHeroesSection.appendChild(topHeroesList);

APP_ELEMENT.appendChild(topHeroesSection);
// -- End Top Heroes section

// -- Create search section
const searchLabel = document.createElement('p');
searchLabel.classList.add('search__label');

const handleChange = (e) => {
  searchLabel.innerText = e.target.value;
};
const searchSection = document.createElement('section');
searchSection.classList.add('search');
const searchH2 = document.createElement('h2');
searchH2.innerText = 'My heroes';
const searchH3 = document.createElement('h3');
searchH3.innerText = 'Search';
const searchInput = document.createElement('input');
searchInput.classList.add('search__input');
searchInput.onkeyup = (e) => handleChange(e);
searchSection.appendChild(searchH2);
searchSection.appendChild(searchH3);
searchSection.appendChild(searchLabel);
searchSection.appendChild(searchInput);
APP_ELEMENT.appendChild(searchSection);
// -- End search section
