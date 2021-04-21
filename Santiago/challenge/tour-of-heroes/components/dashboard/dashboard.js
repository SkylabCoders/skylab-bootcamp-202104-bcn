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

const topHeroesContainer = () => {
  const topHeroesDiv = document.createElement('div');
  topHeroesDiv.classList.add('heroes-container');
  main.appendChild(topHeroesDiv);

  const titleTopHeroes = title('Top Heroes');
  topHeroesDiv.appendChild(titleTopHeroes);

  const topHeroes = document.createElement('ul');
  topHeroes.classList.add('four-heroes');
  topHeroesDiv.appendChild(topHeroes);

  listOfHeroes.then((heroes) => {
    heroes.slice(1, 5).forEach((hero) => {
      const nameHero = document.createElement('li');
      const heroLink = document.createElement('a');
      heroLink.setAttribute('href', `http://127.0.0.1:5500/skylab-bootcamp-202104-bcn/Santiago/challenge/tour-of-heroes/components/details/details.html?heroeID=${hero.id}&heroeName=${hero.name}&heroeFullName=${hero.biography.fullName}`);
      nameHero.appendChild(heroLink);
      heroLink.innerHTML = hero.name;

      topHeroes.appendChild(nameHero);
    });
  });
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
