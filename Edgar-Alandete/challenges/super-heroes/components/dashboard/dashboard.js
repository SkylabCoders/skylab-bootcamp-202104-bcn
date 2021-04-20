const dashboard = document.getElementById('dashboard');
const heroDataUrl = '../../store/superHeroData.json?limit=10';
const heroesData = fetchHeroes(heroDataUrl);

const createHeroesList = () => {
  heroesData.then((data) => {
    const heroesCopy = [...data];
    const heroesToShow = heroesCopy.slice(0, 4);
    const heroNames = createDomElement(dashboard, 'ul', '', '');

    heroesToShow.forEach(({ name, id }) => {
      const heroItem = createDomElement(heroNames, 'li', '', '');
      createDomElement(heroItem, 'a', name, `../heroDetails/heroDetails.html?id=${id}`);
    });
  });
};

const createNavigator = (parent) => {
  const nav = createDomElement(parent, 'ul', '', '', '', 'header__main-navigation');
  const dashboardItem = createDomElement(nav, 'li', '', '', '', '');
  createDomElement(dashboardItem, 'a', 'Dashboard', '#', '', '', '');
  const heroesItem = createDomElement(nav, 'li', '', '', '', '');
  createDomElement(heroesItem, 'a', 'Heroes', '../heroes/heroes.html', '');

  return nav;
};

const createDashboard = () => {
  const header = createDomElement(dashboard, 'header', '', '', '', 'header');
  createDomElement(header, 'h1', 'Tour of Heroes', '', '', 'header__main-title');
  createNavigator(header);
  createDomElement(dashboard, 'h2', 'Top Heroes', '');
  createHeroesList();
};

createDashboard();
