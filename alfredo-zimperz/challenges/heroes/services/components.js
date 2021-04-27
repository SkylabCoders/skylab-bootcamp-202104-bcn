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

const createHtmlElement = (
  tag,
  cssClass = null,
  innerText = null,
) => {
  const newElement = document.createElement(tag);
  newElement.classList.add(cssClass);
  newElement.innerText = innerText;
  return newElement;
};

// --- Create header
const createHeader = (parentElement) => {
  const header = createHtmlElement('header', 'header');
  const headerH1 = createHtmlElement('h1', null, 'Tour of Heroes');
  const nav = createHtmlElement('nav', 'nav');
  const navList = createHtmlElement('ul', 'nav-list');

  NAV_LIST_ELEMENTS.forEach((element) => {
    const navLi = createHtmlElement('li', 'nav-list__item');
    const navLink = createHtmlElement('a', 'item__link', element.name);
    navLink.href = element.url;
    navLi.appendChild(navLink);
    navList.appendChild(navLi);
  });

  nav.appendChild(navList);
  header.appendChild(nav);
  header.appendChild(headerH1);
  parentElement.appendChild(header);
};
// --- End header
