const dashboard = document.getElementById('dashboard');
const heroDataUrl = '../../store/superHeroData.json';
const heroesData = fetchHeroes(heroDataUrl);

const createHeroesList = (section) => {
  heroesData.then((data) => {
    const heroesCopy = [...data];
    const heroesToShow = heroesCopy.slice(0, 4);
    const heroNames = createDomElement(section, 'ul', '', '');

    heroesToShow.forEach(({ name, id }) => {
      const heroItem = createDomElement(heroNames, 'li', '', '');
      createDomElement(heroItem, 'a', name, `../hero-detail/heroDetail.html?id=${id}`);
    });
  });
};

const createNavigator = (parent) => {
  const nav = createDomElement(parent, 'ul', '', '', '', 'header__main-navigation main-navigation');
  const dashboardItem = createDomElement(nav, 'li', '', '', '', 'main-navigation__item');
  createDomElement(dashboardItem, 'a', 'Dashboard', '#', '', '', '');
  const heroesItem = createDomElement(nav, 'li', '', '', '', 'main-navigation__item');
  createDomElement(heroesItem, 'a', 'Heroes', '../heroes/heroes.html', '');

  return nav;
};

const createHeader = () => {
  const header = createDomElement(dashboard, 'header', '', '', '', 'header');
  createDomElement(header, 'h1', 'Tour of Heroes', '', '', 'header__main-title');
  createNavigator(header);
};

const createDashboard = () => {
  createHeader();
  const section = createDomElement(dashboard, 'section', '', '', '', 'top-heroes');
  createDomElement(section, 'h2', 'Top Heroes', '');
  createHeroesList(section);
};

createDashboard();
