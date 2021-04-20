const dashboard = document.getElementById('dashboard');
const heroDataUrl = '../../store/superHeroData.json';
const heroesData = fetchHeroes(heroDataUrl);

const createHeroesList = (section) => {
  heroesData.then((data) => {
    const heroesCopy = [...data];
    const heroesToShow = heroesCopy.slice(0, 4);
    const heroNames = createDomElement(section, 'ul');

    heroesToShow.forEach(({ name, id }) => {
      const heroItem = createDomElement(heroNames, 'li');
      createDomElement(heroItem, 'a', name, [{ name: 'href', value: `../hero-detail/heroDetail.html?id=${id}` }]);
    });
  });
};

const createNavigator = (parent) => {
  const nav = createDomElement(parent, 'ul', '', [{ name: 'class', value: 'header__main-navigation main-navigation' }]);
  const dashboardItem = createDomElement(nav, 'li', '', [{ name: 'class', value: 'main-navigation__item' }]);
  createDomElement(dashboardItem, 'a', 'Dashboard', [{ name: 'href', value: '#' }]);
  const heroesItem = createDomElement(nav, 'li', '', [{ name: 'class', value: 'main-navigation__item' }]);
  createDomElement(heroesItem, 'a', 'Heroes', [{ name: 'href', value: '../heroes/heroes.html' }], '');

  return nav;
};

const createHeader = () => {
  const header = createDomElement(dashboard, 'header', '',
    [{ name: 'class', value: 'header' }]);
  createDomElement(header, 'h1', 'Tour of Heroes', [{ name: 'class', value: 'header__main-title' }]);
  createNavigator(header);
};

const createDashboard = () => {
  createHeader();
  const section = createDomElement(dashboard, 'section', '', [{ name: 'class', value: 'top-heroes' }]);
  createDomElement(section, 'h2', 'Top Heroes', [{ name: 'class', value: 'top-heroes--title' }]);
  createHeroesList(section);
};

createDashboard();
