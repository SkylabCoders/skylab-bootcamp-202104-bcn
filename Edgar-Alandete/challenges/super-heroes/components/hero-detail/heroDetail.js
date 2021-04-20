const hero = document.getElementById('hero-detail');
const heroDataUrl = '../../store/superHeroData.json';
const urlParams = new URLSearchParams(window.location.search);

const createNavigator = (parent) => {
  const nav = createDomElement(parent, 'ul', '', [{ name: 'class', value: 'header__main-navigation main-navigation' }]);
  const dashboardItem = createDomElement(nav, 'li', '', [{ name: 'class', value: 'main-navigation__item' }]);
  createDomElement(dashboardItem, 'a', 'Dashboard', [{ name: 'href', value: '../dashboard/dashboard.html' }]);
  const heroesItem = createDomElement(nav, 'li', '', [{ name: 'class', value: 'main-navigation__item' }]);
  createDomElement(heroesItem, 'a', 'Heroes', [{ name: 'href', value: '../heroes/heroes.html' }], '');

  return nav;
};

const createHeader = () => {
  const header = createDomElement(hero, 'header', '',
    [{ name: 'class', value: 'header' }]);
  createDomElement(header, 'h1', 'Tour of Heroes', [{ name: 'class', value: 'header__main-title' }]);
  createNavigator(header);
};

const heroDetail = () => {
  createHeader();
  const heroInfo = getHeroById(heroDataUrl, urlParams.get('id'));

  heroInfo.then(({ name }) => {
    createDomElement(hero, 'h2', `${name} details!`, [{ name: 'class', value: 'hero-detail__title' }]);
  });
};

heroDetail();
