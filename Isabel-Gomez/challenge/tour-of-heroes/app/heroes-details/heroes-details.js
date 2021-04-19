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

const mainSection = document.querySelector('.container-heroes-details');

const getOnclickDashboard = () => {
  window.location.replace('./../dashboard/dashboard.html');
};

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
  buttonDashboard.onclick = () => getOnclickDashboard();

  const buttonHeroes = document.createElement('button');
  buttonHeroes.innerHTML = 'Heroes';
  mainSection.appendChild(buttonHeroes);
  buttonHeroes.onclick = () => getOnclickList();

  const getSubTitle = document.createElement('h3');
  getSubTitle.innerHTML = 'Details';
  mainSection.appendChild(getSubTitle);
};
createHeaderDashboard();

const getHeroeDetails = () => {
  const getContainerInfo = document.createElement('div');
  mainSection.appendChild(getContainerInfo);
  const getIdHeroe = document.createElement('div');
  getContainerInfo.appendChild(getIdHeroe);
  getIdHeroe.innerHTML = 'ID:';

  const inputHeroe = document.createElement('input');
  getContainerInfo.appendChild(inputHeroe);
};
getHeroeDetails();

const getButtonDetails = () => {
  const buttonViewDetails = document.createElement('button');
  buttonViewDetails.innerHTML = 'View details';
  mainSection.appendChild(buttonViewDetails);
};
getButtonDetails();
