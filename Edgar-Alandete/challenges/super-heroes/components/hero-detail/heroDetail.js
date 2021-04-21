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

  heroInfo.then(({ name, powerstats }) => {
    createDomElement(hero, 'h2', `${name} details!`, [{ name: 'class', value: 'hero-detail--title' }]);
    const powerstatsSection = createDomElement(hero, 'section', '', [{ name: 'class', value: 'hero-detail__powerstats powerstats' }]);
    const powerstatsList = createDomElement(powerstatsSection, 'ul', '', [{ name: 'class', value: 'powerstats__stats-list stats-list' }]);
    // createDomElement(powerstatsList, 'li', `Intelligence ${powerstats.intelligence}`, [{ name: 'class', value: 'stats-list--item' }]);
    // createDomElement(powerstatsList, 'li', `Strength ${powerstats.strength}`, [{ name: 'class', value: 'stats-list--item' }]);
    // createDomElement(powerstatsList, 'li', `Speed ${powerstats.speed}`, [{ name: 'class', value: 'stats-list--item' }]);
    // createDomElement(powerstatsList, 'li', `Durability ${powerstats.durability}`, [{ name: 'class', value: 'stats-list--item' }]);
    // createDomElement(powerstatsList, 'li', `Power ${powerstats.power}`, [{ name: 'class', value: 'stats-list--item' }]);
    // createDomElement(powerstatsList, 'li', `Combat ${powerstats.combat}`, [{ name: 'class', value: 'stats-list--item' }]);
    Object.entries(powerstats).map(([key, value]) => createDomElement(powerstatsList, 'li', `${key} ${value}`, [{ name: 'class', value: 'stats-list--item' }]));
  });
};

heroDetail();
