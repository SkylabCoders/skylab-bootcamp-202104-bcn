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

function createDomElement(element, text, href, parent) {
  const elementToCreate = document.createElement(element);
  if (text) {
    elementToCreate.innerText = text;
  }
  if (href) {
    elementToCreate.setAttribute('href', href);
  }
  parent.appendChild(elementToCreate);
  return elementToCreate;
}

const createHeroesList = () => {
  const heroElements = createDomElement('ul', '', '', heroesList);
  heroes.forEach((hero) => {
    const heroItem = createDomElement('li', '', '', heroElements);
    // ../heroDetails/heroDetails#${hero.name}.html`
    createDomElement('span', hero.id, '', heroItem);
    createDomElement('a', hero.name, '../heroDetails/heroDetails.html', heroItem);
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
};

createHeroesPage();
