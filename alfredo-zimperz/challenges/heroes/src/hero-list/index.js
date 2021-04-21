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

const handleClick = (id) => {
  sessionStorage.setItem('hero-id', id);
  window.location.replace('/alfredo-zimperz/challenges/heroes/src/hero-detail/');
};

// -- Create My Heroes section
const myHeroesSection = document.createElement('section');
myHeroesSection.classList.add('my-heroes');
const myHeroesH2 = document.createElement('h2');
myHeroesH2.innerText = 'My Heroes';
const searchInput = document.createElement('input');
searchInput.classList.add('search__input');
const addHeroButton = document.createElement('button');
addHeroButton.innerText = 'Add hero';
myHeroesSection.appendChild(myHeroesH2);
myHeroesSection.appendChild(searchInput);
myHeroesSection.appendChild(addHeroButton);
APP_ELEMENT.appendChild(myHeroesSection);
// -- Create Heroes list
const myHeroesList = document.createElement('ul');
myHeroesList.classList.add('heroes-list');
HEROES_LIST.then((heroes) => {
  heroes.forEach((hero) => {
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
    myHeroesList.appendChild(liElement);
  });
});

myHeroesSection.appendChild(myHeroesList);

APP_ELEMENT.appendChild(myHeroesSection);
// -- End Top Heroes section
