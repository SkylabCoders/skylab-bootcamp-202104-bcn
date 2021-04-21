const parentElement = document.getElementsByTagName('main')[0];

const maintTitle = createNewElement('h2', 'headerTitle', 'Tour of Heroes', parentElement);

const navMenu = createNewElement('ul', 'nav-container', null, parentElement);

const dashboardNav = createNewElement('li', 'nav', 'Dashboard', navMenu);
const heroesNav = createNewElement('li', 'nav', 'Heroes', navMenu);

const secondTitle = createNewElement('h1', 'mainTitle', 'Top Heroes', parentElement);

const menu = createNewElement('ul', 'menu-container', null, parentElement);

const heroes = fetchHeroes('./../../store/superHeroData.json');

const li = createInnerElements(4, 'li', 'li-menu', null, menu);

const anch = createInnerElements(2, 'a', 'link-menu', 'hola', li);
