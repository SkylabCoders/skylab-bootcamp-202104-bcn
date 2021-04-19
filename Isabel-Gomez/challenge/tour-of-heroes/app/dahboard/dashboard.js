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

const mainSection = document.querySelector('.container');

const createDashboard = () => {
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

  const createHeroesContainer = document.createElement('div');
  mainSection.appendChild(createHeroesContainer);

  const detailsHeroes = document.createElement('a');
  detailsHeroes.innerHTML = 'Narco';
  detailsHeroes.setAttribute('href', './../heroes/heroes.html');
  createHeroesContainer.appendChild(detailsHeroes);

  detailsHeroes = document.createElement('a');
  detailsHeroes.innerHTML = 'Bombasto';
  detailsHeroes.setAttribute('href', './../heroes/heroes.html');
  createHeroesContainer.appendChild(detailsHeroes);

  detailsHeroes = document.createElement('a');
  detailsHeroes.innerHTML = 'Celeritas';
  detailsHeroes.setAttribute('href', './../heroes/heroes.html');
  createHeroesContainer.appendChild(detailsHeroes);

  detailsHeroes = document.createElement('a');
  detailsHeroes.innerHTML = 'Magneta';
  detailsHeroes.setAttribute('href', './../heroes/heroes.html');
  createHeroesContainer.appendChild(detailsHeroes);
};
createDashboard();
