const HEROES_LIST = fetchData('../../store/superHeroData.json');

const NAV_LIST_ELEMENTS = [
  {
    name: 'dashboard',
    url: '/alfredo-zimperz/challenges/heroes/src/dashboard/',
  },
  {

    name: 'hero-list',
    url: '/alfredo-zimperz/challenges/heroes/src/hero-list/',

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

// -- Create Heroe detail section

// const heroIdFromSession = parseInt(sessionStorage.getItem('hero-id'), 10);
// const actualHero = HEROES.find((hero) => hero.id === heroIdFromSession);
HEROES_LIST.then((heroes) => {
  const heroIdFromURL = new URLSearchParams(window.location.search).get('heroId');
  const actualHero = heroes.find((hero) => hero.id.toString() === heroIdFromURL);
  const myHeroesSection = document.createElement('section');
  myHeroesSection.classList.add('my-heroes');
  const myHeroesH2 = document.createElement('h2');
  myHeroesH2.innerText = `${actualHero.name} details`;
  const searchInput = document.createElement('input');
  searchInput.classList.add('search__input');
  const addHeroButton = document.createElement('button');
  addHeroButton.innerText = 'Add hero';
  myHeroesSection.appendChild(myHeroesH2);
  myHeroesSection.appendChild(searchInput);
  myHeroesSection.appendChild(addHeroButton);
  APP_ELEMENT.appendChild(myHeroesSection);
});
