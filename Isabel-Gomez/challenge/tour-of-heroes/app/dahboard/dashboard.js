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

const mainSection = document.querySelector('.container-dashboard');

const createHeaderDashboard = () => {
  const getTitle = document.createElement('h1');
  getTitle.innerHTML = 'Tour of Heroes';
  mainSection.appendChild(getTitle);

  const buttonDashboard = document.createElement('button');
  buttonDashboard.innerHTML = 'Dashboard';
  mainSection.appendChild(buttonDashboard);

  const buttonHeroes = document.createElement('button');
  buttonHeroes.innerHTML = 'Heroes';
  mainSection.appendChild(buttonHeroes);

  const getSubTitle = document.createElement('h3');
  getSubTitle.innerHTML = 'Top Heroes';
  mainSection.appendChild(getSubTitle);
};
createHeaderDashboard();

const createButtonsHeroes = () => {
  const createHeroesContainer = document.createElement('div');
  mainSection.appendChild(createHeroesContainer);

  const detailsHeroesOne = document.createElement('a');
  detailsHeroesOne.innerHTML = heroes[1].name;
  detailsHeroesOne.setAttribute('href', './../heroes/heroes.html');
  createHeroesContainer.appendChild(detailsHeroesOne);

  const detailsHeroesTwo = document.createElement('a');
  detailsHeroesTwo.innerHTML = 'Bombasto';
  detailsHeroesTwo.setAttribute('href', './../heroes/heroes.html');
  createHeroesContainer.appendChild(detailsHeroesTwo);

  const detailsHeroesThree = document.createElement('a');
  detailsHeroesThree.innerHTML = 'Celeritas';
  detailsHeroesThree.setAttribute('href', './../heroes/heroes.html');
  createHeroesContainer.appendChild(detailsHeroesThree);

  const detailsHeroesFour = document.createElement('a');
  detailsHeroesFour.innerHTML = 'Magneta';
  detailsHeroesFour.setAttribute('href', './../heroes/heroes.html');
  createHeroesContainer.appendChild(detailsHeroesFour);
};
createButtonsHeroes();
