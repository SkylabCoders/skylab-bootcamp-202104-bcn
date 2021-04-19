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

const createSecondTitle = () => {
  const secondTitle = document.createElement('h2');
  secondTitle.innerText = 'Top Heores';
  dashboard.appendChild(secondTitle);
};

const createNavigator = () => {
  const navigator = document.createElement('ul');
  const dashboardItem = document.createElement('li');
  dashboardItem.innerText = 'Dashboard';
  const heroesItem = document.createElement('li');
  heroesItem.innerText = 'Heores';
  navigator.appendChild(dashboardItem);
  navigator.appendChild(heroesItem);
  dashboard.appendChild(navigator);
};
const createTitle = () => {
  const titlePage = document.createElement('h1');
  titlePage.innerText = 'Tour of Heroes';
  dashboard.appendChild(titlePage);
};

const createDashboardPage = () => {
  createTitle();
  createNavigator();
  createSecondTitle();
};

createDashboardPage();
