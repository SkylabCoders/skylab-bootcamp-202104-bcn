const heroes = document.getElementById('heroes');
const heroDataUrl = '../../store/superHeroData.json';
const heroesData = fetchHeroes(heroDataUrl);

function showFavouriteHero(name, id) {
  const container = document.getElementById('hero');
  container.innerText = `${name} is my hero`;
  createDomElement(container, 'a', 'View Details', `../hero-detail/heroDetail.html?id=${id}`);
}

const createHeroesList = (section) => {
  heroesData.then((data) => {
    const heroesCopy = [...data].sort(() => 0.5 - Math.random());
    const heroesToShow = heroesCopy.slice(0, 10);
    const heroNames = createDomElement(section, 'ul', '', '');

    heroesToShow.forEach(({ name, id }) => {
      const heroItem = createDomElement(heroNames, 'li', '', '');
      createDomElement(heroItem, 'span', id, '', '', '');
      createDomElement(heroItem, 'a', name, '');
      heroItem.onclick = function heroCreation() {
        showFavouriteHero(name, id);
      };
    });
  });
};

const createNavigator = (parent) => {
  const nav = createDomElement(parent, 'ul', '', '', '', 'header__main-navigation main-navigation');
  const dashboardItem = createDomElement(nav, 'li', '', '', '', 'main-navigation__item');
  createDomElement(dashboardItem, 'a', 'Dashboard', '../dashboard/dashboard.html', '', '', '');
  const heroesItem = createDomElement(nav, 'li', '', '', '', 'main-navigation__item');
  createDomElement(heroesItem, 'a', 'Heroes', '#', '');

  return nav;
};

const createHeader = () => {
  const header = createDomElement(heroes, 'header', '', '', '', 'header');
  createDomElement(header, 'h1', 'Tour of Heroes', '', '', 'header__main-title');
  createNavigator(header);
};

const myHeroes = () => {
  createHeader();
  const section = createDomElement(heroes, 'section', '', '', '', 'top-heroes');
  createDomElement(section, 'h2', 'My Heroes', '');
  createHeroesList(section);
  createDomElement(heroes, 'div', '', '', 'hero');
};

myHeroes();
