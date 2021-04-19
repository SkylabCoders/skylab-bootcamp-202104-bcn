const heroDetail = document.getElementById('hero-detail');

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

const createNavigator = (parent) => {
  const nav = createDomElement('ul', '', '', parent);
  const dashboardItem = createDomElement('li', '', '#', nav);
  createDomElement('a', 'Dashboard', '#', dashboardItem);
  const heroesItem = createDomElement('li', '', '', nav);
  createDomElement('a', 'Heroes', '../heroes/heroes.html', heroesItem);

  return nav;
};

const createHeroDetail = () => {
  const header = createDomElement('header', '', '', heroDetail);
  createDomElement('h1', 'Tour of Heroes', '', header);
  createNavigator(header);
  createDomElement('h2', 'Top Heroes', '', heroDetail);
};

createHeroDetail();
