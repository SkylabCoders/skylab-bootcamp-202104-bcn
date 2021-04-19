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
  const buttons = document.createElement('button');
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
  dashboardDiv.appendChild(dashboardButton);

  const heroesButton = mainButtons('Dashboard');
  dashboardDiv.appendChild(heroesButton);
};

const obtainTopHeroes = (heroId) => {
  let result;

  heroes.forEach(((hero) => {
    if (hero.id === heroId) {
      result = hero;
    }
  }));

  return result;
};

const topHeroesContainer = () => {
  const topHeroesDiv = document.createElement('div');
  topHeroesDiv.classList.add('heroes-container');
  main.appendChild(topHeroesDiv);

  const titleTopHeroes = document.createElement('h3');
  titleTopHeroes.innerHTML = 'Top Heroes';
  topHeroesDiv.appendChild(titleTopHeroes);

  const topHeroes = document.createElement('div');
  topHeroes.classList.add('four-heroes');
  topHeroesDiv.appendChild(topHeroes);

  const narco = obtainTopHeroes(12);
  const narcoSpan = document.createElement('span');
  narcoSpan.innerHTML = narco.name;
  topHeroes.appendChild(narcoSpan);

  const bombasto = obtainTopHeroes(13);
  const bombastoSpan = document.createElement('span');
  bombastoSpan.innerHTML = bombasto.name;
  topHeroes.appendChild(bombastoSpan);

  const celeritas = obtainTopHeroes(14);
  const celeritasSpan = document.createElement('span');
  celeritasSpan.innerHTML = celeritas.name;
  topHeroes.appendChild(celeritasSpan);

  const magneta = obtainTopHeroes(15);
  const magnetaSpan = document.createElement('span');
  magnetaSpan.innerHTML = magneta.name;
  topHeroes.appendChild(magnetaSpan);
};

const generateDashboard = () => {
  generateHeader();
  topHeroesContainer();
  obtainTopHeroes();
};
generateDashboard();
