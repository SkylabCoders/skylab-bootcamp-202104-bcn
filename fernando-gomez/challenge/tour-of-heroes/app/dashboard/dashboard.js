const container = document.querySelector('.container');
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

const getHero = (heroId) => {
  let result;
  heroes.forEach((hero) => {
    if (hero.id === heroId) {
      result = hero;
    }
  });
  return result;
};

const mainTitle = () => {
  const title = document.createElement('h1');
  title.innerHTML = 'Tour of heroes';
  title.classList = 'navigator__title';
  return title;
};

const navigationButton = (name) => {
  const newButton = document.createElement('button');
  newButton.innerHTML = name;
  return newButton;
};

const generateNavigator = () => {
  const navigator = document.createElement('div');
  const title = mainTitle();
  const dashboardButton = navigationButton('Dashboard');
  const heroesButton = navigationButton('Heroes');
  navigator.classList = 'navigator';
  navigator.appendChild(title);
  navigator.appendChild(dashboardButton);
  navigator.appendChild(heroesButton);
  return navigator;
};

const topHeroButton = (heroId) => {
  const heroButton = document.createElement('button');
  const hero = getHero(heroId);
  heroButton.innerHTML = hero.name;

  return heroButton;
};

const topHeroTitle = () => {
  const topTitle = document.createElement('h2');
  topTitle.classList = 'topHeroes__title';
  topTitle.innerHTML = 'Top heroes';
  return topTitle;
};

const generateTopHeroes = () => {
  const topHeroes = document.createElement('div');
  const topHeroesTitle = topHeroTitle();
  topHeroes.classList = 'topHeroes';
  topHeroes.appendChild(topHeroesTitle);
  topHeroes.appendChild(topHeroButton(12));
  topHeroes.appendChild(topHeroButton(13));
  topHeroes.appendChild(topHeroButton(14));
  topHeroes.appendChild(topHeroButton(15));

  return topHeroes;
};

const generateDashboard = () => {
  const navigator = generateNavigator();
  const topHeroes = generateTopHeroes();

  container.appendChild(navigator);
  container.appendChild(topHeroes);
};

generateDashboard();
