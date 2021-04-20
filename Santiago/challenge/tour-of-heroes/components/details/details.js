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

const detailsContainer = () => {
  const topDetailsDiv = document.createElement('div');
  topDetailsDiv.classList.add('heroes-container');
  main.appendChild(topDetailsDiv);

  const heroID = document.createElement('p');
  topDetailsDiv.appendChild(heroID);
  const paramID = new URLSearchParams(location.search);
  const heroeID = paramID.get('heroeID');
  heroID.innerHTML = `id: ${heroeID}`;
  main.appendChild(heroID);

  const heroName = document.createElement('p');
  topDetailsDiv.appendChild(heroName);
  const paramName = new URLSearchParams(location.search);
  const heroeName = paramName.get('heroeName');
  heroName.innerHTML = `name: ${heroeName}`;
  main.appendChild(heroName);

  const titleTopHeroes = title(`${heroeName} details`);
  topDetailsDiv.appendChild(titleTopHeroes);
};

const generateDetails = () => {
  generateHeader();
  detailsContainer();
};
generateDetails();
