const heroesList = document.getElementById('heroes');

const heroes = [
  { id: 11, name: 'Dr Nice' },
  { id: 12, name: 'Narco' },
  { id: 13, name: 'Bombasto' },
  { id: 14, name: 'Celeritas' },
  { id: 15, name: 'Magneta' },
  { id: 16, name: 'RubberMan' },
  { id: 17, name: 'Dynama' },
  { id: 18, name: 'Dr IQ' },
  { id: 19, name: 'Magma' },
  { id: 20, name: 'Tornado' },
];

function createDomElement(element, text, href, parent, id) {
  const elementToCreate = document.createElement(element);
  if (text) {
    elementToCreate.innerText = text;
  }
  if (href) {
    elementToCreate.setAttribute('href', href);
  }
  if (id) {
    elementToCreate.setAttribute('id', id);
  }
  parent.appendChild(elementToCreate);
  return elementToCreate;
}

function showFavouriteHero(hero) {
  const container = document.getElementById('hero');
  container.innerText = `${hero.name} is my hero`;
  createDomElement('a', 'View Details', `../heroDetails/heroDetails?id=${hero.id}.html`, container);
}

const createHeroesList = () => {
  const heroElements = createDomElement('ul', '', '', heroesList);
  heroes.forEach((hero) => {
    const heroItem = createDomElement('li', '', '', heroElements);
    createDomElement('span', hero.id, '', heroItem);
    createDomElement('a', hero.name, '', heroItem);
    heroItem.onclick = function heroCreation() {
      showFavouriteHero(hero);
    };
  });
};

const createNavigator = (parent) => {
  const nav = createDomElement('ul', '', '', parent);
  const dashboardItem = createDomElement('li', '', '#', nav);
  createDomElement('a', 'Dashboard', '../dashboard/dashboard.html', dashboardItem);
  const heroesItem = createDomElement('li', '', '', nav);
  createDomElement('a', 'Heroes', '#', heroesItem);

  return nav;
};

const createHeroesPage = () => {
  const header = createDomElement('header', '', '', heroesList);
  createDomElement('h1', 'Tour of Heroes', '', header);
  createNavigator(header);
  createDomElement('h2', 'My heroes', '', heroesList);
  createHeroesList();
  createDomElement('div', '', '', heroesList, 'hero');
};

createHeroesPage();
