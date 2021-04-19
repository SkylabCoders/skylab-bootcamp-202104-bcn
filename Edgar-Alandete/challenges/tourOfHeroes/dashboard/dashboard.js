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

function createDomElement(element, text, parent) {
  const elementToCreate = document.createElement(element);
  if (text) {
    elementToCreate.innerText = text;
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
  const heroNames = createDomElement('ul', '', dashboard);
  heroesToShow.forEach(({ name }) => {
    createDomElement('li', name, heroNames);
  });
};

const createNavigator = () => {
  const nav = createDomElement('ul', '', dashboard);
  createDomElement('li', 'Dashboard', nav);
  createDomElement('li', 'Heroes', nav);

  console.log(document.getElementsByTagName('ul'));
};

const createDashboardPage = () => {
  createDomElement('h1', 'Tour of Heroes', dashboard);
  createNavigator();
  createDomElement('h2', 'Top Heroes', dashboard);
  createHeroesList();
};

createDashboardPage();
