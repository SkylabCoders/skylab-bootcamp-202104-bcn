const listOfHeroes = fetchSuperHeroes();
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

const heroesList = () => {
  const listOfHeroesDiv = document.createElement('div');
  listOfHeroesDiv.classList.add('heroes-list');
  main.appendChild(listOfHeroesDiv);

  const titleList = document.createElement('h3');
  titleList.innerHTML = 'My heroes';
  listOfHeroesDiv.appendChild(titleList);

  const listDiv = document.createElement('ul');
  listOfHeroesDiv.appendChild(listDiv);

  listOfHeroes.then((heroes) => {
    heroes.forEach((hero) => {
      const nameHero = document.createElement('li');
      const heroLink = document.createElement('a');
      heroLink.setAttribute('href', `http://127.0.0.1:5500/skylab-bootcamp-202104-bcn/Santiago/challenge/tour-of-heroes/components/details/details.html?heroeName=${hero.name}&heroeID=${hero.id}`);
      nameHero.appendChild(heroLink);
      heroLink.innerHTML = hero.name;
      listDiv.appendChild(nameHero);
    });
  });
};

const generateDashboard = () => {
  generateHeader();
  heroesList();
};
generateDashboard();
