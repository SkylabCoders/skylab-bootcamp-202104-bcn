const dashboard = document.getElementById('dashboard');
const heroDataUrl = '../../store/superHeroData.json?limit=10';
const heroesData = fetchHeroes(heroDataUrl);

const getRandomHeroes = (heroesNumber) => {
  const heroesCopy = [...heroesData];
  return heroesCopy.slice(0, heroesNumber);
};

const createHeroesList = () => {
  const heroesToShow = getRandomHeroes(4);
  const heroNames = createDomElement('ul', '', '', dashboard);
  heroesToShow.forEach(({ name }) => {
    const heroItem = createDomElement('li', '', '', heroNames);
    createDomElement('a', name, `../heroDetails/heroDetails#${name}.html`, heroItem);
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
  fetchHeroes(heroDataUrl).then((data) => {
    console.log(data);
  });
};

createDashboard();
