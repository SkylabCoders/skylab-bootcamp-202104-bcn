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

const topHeroesContainer = () => {
  const topHeroesDiv = document.createElement('div');
  topHeroesDiv.classList.add('heroes-container');
  main.appendChild(topHeroesDiv);

  const titleTopHeroes = title('Top Heroes');
  topHeroesDiv.appendChild(titleTopHeroes);

  const topHeroes = document.createElement('ul');
  topHeroes.classList.add('four-heroes');
  topHeroesDiv.appendChild(topHeroes);

  for (let i = 1; i < heroes.length - 5; i += 1) {
    const li = document.createElement('li');
    li.innerHTML = `${heroes[i].name}`;
    topHeroes.appendChild(li);
  }
};

const searchContainer = () => {
  const searchDiv = document.createElement('div');
  searchDiv.classList.add('search-container');
  main.appendChild(searchDiv);

  const searchTitle = title('Hero Search');
  searchDiv.appendChild(searchTitle);

  const inputSearch = document.createElement('input');
  inputSearch.setAttribute('input', 'text');
  searchDiv.appendChild(inputSearch);
};

const generateDashboard = () => {
  generateHeader();
  topHeroesContainer();
  searchContainer();
};
generateDashboard();
