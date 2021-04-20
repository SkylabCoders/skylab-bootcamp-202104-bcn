const HEROES = [
  { id: 11, name: 'Dr Nice' },
  { id: 12, name: 'Narco' },
  { id: 13, name: 'Bombasto' },
  { id: 14, name: 'Celeritas' },
  { id: 15, name: 'Magneta' },
  { id: 16, name: 'RubberMan' },
  { id: 17, name: 'Dynama' },
  { id: 18, name: 'Dr IQ' },
  { id: 19, name: 'Magma' },
  { id: 20, name: 'Tornado' },
];
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

const heroIdFromSession = parseInt(sessionStorage.getItem('hero-id'), 10);
const actualHero = HEROES.find((hero) => hero.id === heroIdFromSession);
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

// -- End Top Heroes section
