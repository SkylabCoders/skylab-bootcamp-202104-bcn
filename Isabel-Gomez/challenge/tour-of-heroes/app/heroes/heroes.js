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

function mouseOver(name) {
  const title = document.querySelector('.title');
  if (name) {
    title.innerHTML = `${name} is my hero`;
  } else {
    title.innerHTML = '';
  }
}

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
    reference.classList.add('link');
    reference.href = './../heroes-details/heroes-details.html';
    reference.onmouseover = (e) => (mouseOver(e.target.innerHTML));
    reference.onmouseout = () => (mouseOver(undefined));
  });
};
createListHeroes(heroes);

const addLastPhrase = () => {
  const finalTitle = document.createElement('h3');
  finalTitle.classList.add('title');
  mainSection.appendChild(finalTitle);
};
addLastPhrase();

const getOnclickDetails = () => {
  window.location.replace('./../heroes-details/heroes-details.html');
};

const getButtonDetails = () => {
  const buttonDetails = document.createElement('button');
  buttonDetails.innerHTML = 'View Details';
  mainSection.appendChild(buttonDetails);
  buttonDetails.onclick = () => getOnclickDetails();
};
getButtonDetails();
