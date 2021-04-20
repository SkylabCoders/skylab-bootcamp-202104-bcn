const heroes = document.getElementById('heroes');
const heroDataUrl = '../../store/superHeroData.json';
const heroesData = fetchHeroes(heroDataUrl);

function showFavouriteHero(name, id) {
  const container = document.getElementById('hero');
  container.innerText = `${name} is my hero`;
  createDomElement(container, 'a', 'View Details', [{ name: 'href', value: `../hero-detail/heroDetail.html?id=${id}` }]);
}

const createHeroesList = (section) => {
  heroesData.then((data) => {
    const heroesCopy = [...data].sort(() => 0.5 - Math.random());
    const heroesToShow = heroesCopy.slice(0, 10);
    const heroNames = createDomElement(section, 'ul', '', [{ name: 'class', value: 'my-heroes__list-my-heroes list-my-heroes' }]);

    heroesToShow.forEach(({ name, id }) => {
      const heroItem = createDomElement(heroNames, 'li', '', [{ name: 'class', value: 'list-my-heroes--item' }]);
      createDomElement(heroItem, 'span', id);
      createDomElement(heroItem, 'a', name);
      heroItem.onclick = function heroCreation() {
        showFavouriteHero(name, id);
      };
    });
  });
};

const createNavigator = (parent) => {
  const nav = createDomElement(parent, 'ul', '', [{ name: 'class', value: 'header__main-navigation main-navigation' }]);
  const dashboardItem = createDomElement(nav, 'li', '', [{ name: 'class', value: 'main-navigation__item' }]);
  createDomElement(dashboardItem, 'a', 'Dashboard', [{ name: 'href', value: '../dashboard/dashboard.html' }]);
  const heroesItem = createDomElement(nav, 'li', '', [{ name: 'class', value: 'main-navigation__item' }]);
  createDomElement(heroesItem, 'a', 'Heroes', [{ name: 'href', value: '#' }], '');

  return nav;
};

const createHeader = () => {
  const header = createDomElement(heroes, 'header', '',
    [{ name: 'class', value: 'header' }]);
  createDomElement(header, 'h1', 'Tour of Heroes', [{ name: 'class', value: 'header__main-title' }]);
  createNavigator(header);
};

const myHeroes = () => {
  createHeader();
  const section = createDomElement(heroes, 'section', '', [{ name: 'class', value: 'my-heroes' }]);
  createDomElement(section, 'h2', 'My Heroes', [{ name: 'class', value: 'my-heroes--title' }]);
  createHeroesList(section);
  createDomElement(heroes, 'div', '', [{ name: 'id', value: 'hero' }]);
};

myHeroes();
