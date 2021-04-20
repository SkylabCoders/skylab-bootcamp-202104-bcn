const dashboard = document.getElementById('dashboard');

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

const getRandomHeroes = (heroesNumber) => {
  const heroesCopy = [...heroes];
  const shuffled = heroesCopy.sort(() => 0.5 - Math.random());
  return shuffled.slice(0, heroesNumber);
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
  const nav = createDomElement('ul', '', '', parent);
  const dashboardItem = createDomElement('li', '', '#', nav);
  createDomElement('a', 'Dashboard', '#', dashboardItem);
  const heroesItem = createDomElement('li', '', '', nav);
  createDomElement('a', 'Heroes', '../heroes/heroes.html', heroesItem);

  return nav;
};

const createHeroesPage = () => {
  const header = createDomElement('header', '', '', dashboard);
  createDomElement('h1', 'Tour of Heroes', '', header);
  createNavigator(header);
  createDomElement('h2', 'Top Heroes', '', dashboard);
  createHeroesList();
};

createHeroesPage();
