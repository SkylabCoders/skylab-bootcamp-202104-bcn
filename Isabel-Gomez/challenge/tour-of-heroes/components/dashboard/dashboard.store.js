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

const getOnclickList = () => {
  window.location.replace('./../heroes/heroes.html');
};

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
  buttonHeroes.onclick = () => getOnclickList();

  const getSubTitle = document.createElement('h3');
  getSubTitle.innerHTML = 'Top Heroes';
  mainSection.appendChild(getSubTitle);
};
createHeaderDashboard();

const createButtonsHeroes = (array) => {
  const createHeroesContainer = document.createElement('div');
  mainSection.appendChild(createHeroesContainer);
  array.splice(1, 4).forEach((element) => {
    const reference = document.createElement('a');
    createHeroesContainer.appendChild(reference);
    reference.innerHTML = `${element.name}`;
    reference.href = './../heroes-details/heroes-details.html';
  });
};
createButtonsHeroes(heroes);
