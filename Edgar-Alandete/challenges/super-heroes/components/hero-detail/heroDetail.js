const hero = document.getElementById('hero-detail');
const heroDataUrl = '../../store/superHeroData.json';
const urlParams = new URLSearchParams(window.location.search);

const createNavigator = (parent) => {
  const nav = createDomElement(parent, 'ul', '', '', '', 'header__main-navigation main-navigation');
  const dashboardItem = createDomElement(nav, 'li', '', '', '', 'main-navigation__item');
  createDomElement(dashboardItem, 'a', 'Dashboard', '../dashboard/dashboard.html', '', '', '');
  const heroesItem = createDomElement(nav, 'li', '', '', '', 'main-navigation__item');
  createDomElement(heroesItem, 'a', 'Heroes', '../heroes/heroes.html', '');

  return nav;
};

const createHeader = () => {
  const header = createDomElement(hero, 'header', '', '', '', 'header');
  createDomElement(header, 'h1', 'Tour of Heroes', '', '', 'header__main-title');
  createNavigator(header);
};

const heroDetail = () => {
  createHeader();
  const heroInfo = getHeroById(heroDataUrl, urlParams.get('id'));

  heroInfo.then(({ name }) => {
    createDomElement(hero, 'h2', `${name} details!`, '');
  });
};

heroDetail();
