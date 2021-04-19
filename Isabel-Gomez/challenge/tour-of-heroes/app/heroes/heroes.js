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

const mainSection = document.querySelector('.container-heroes');

const getOnclickDashboard = () => {
  window.location.replace('./../dashboard/dashboard.html');
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

  const getSubTitle = document.createElement('h3');
  getSubTitle.innerHTML = 'My Heroes';
  mainSection.appendChild(getSubTitle);
};
createHeaderDashboard();

const createListHeroes = (array) => {
  const createListContainer = document.createElement('div');
  mainSection.appendChild(createListContainer);
  const getList = document.createElement('ul');
  createListContainer.appendChild(getList);
  array.forEach((element) => {
    const newLi = document.createElement('li');
    getList.appendChild(newLi);
    const reference = document.createElement('a');
    newLi.appendChild(reference);
    reference.innerHTML = `${element.name}`;
    reference.href = './../heroes-details/heroes-details.html';
  });
};
createListHeroes(heroes);

const getButtonBack = () => {
  const buttonBack = document.createElement('button');
  buttonBack.innerHTML = 'Back';
  mainSection.appendChild(buttonBack);
};
getButtonBack();
