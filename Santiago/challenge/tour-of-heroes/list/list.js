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
  { id: 20, name: 'Tornado' }
];

const main = document.querySelector('.main');

const title = (textTitle) => {
  const mainTitle = document.createElement('h3');
  mainTitle.innerHTML = textTitle;
  return mainTitle;
};

const mainButtons = (btnsName) => {
  const buttons = document.createElement('a');
  buttons.innerHTML = btnsName;
  return buttons;
};

const generateHeader = () => {
  const dashboardDiv = document.createElement('div');
  dashboardDiv.classList.add('header');
  main.appendChild(dashboardDiv);

  const titleDashboard = title('Tour of Heroes');
  dashboardDiv.appendChild(titleDashboard);

  const dashboardButton = mainButtons('Dashboard');
  dashboardButton.href = './../dashboard/dashboard.html';
  dashboardDiv.appendChild(dashboardButton);

  const heroesButton = mainButtons('Heroes');
  heroesButton.href = './../list/list.html';
  dashboardDiv.appendChild(heroesButton);
};

const obtainAllHereos = () => {
  let fullList;

  heroes.forEach(((hero) => {
    console.log(hero.name);
  }));

  return fullList;
};

const heroesList = () => {
  const listOfHeroesDiv = document.createElement('div');
  listOfHeroesDiv.classList.add('heroes-list');
  main.appendChild(listOfHeroesDiv);

  const titleList = document.createElement('h3');
  titleList.innerHTML = 'My heroes';
  listOfHeroesDiv.appendChild(titleList);

  const listDiv = document.createElement('div');
  listOfHeroesDiv.appendChild(listDiv);
};

const generateDashboard = () => {
  generateHeader();
  heroesList();
  obtainAllHereos();
};
generateDashboard();
