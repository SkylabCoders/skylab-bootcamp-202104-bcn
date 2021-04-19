const APP_ELEMENT = document.querySelector('.app');

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

const header = document.createElement('header');
header.classList.add('header');

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
APP_ELEMENT.appendChild(header);
// finish create header
