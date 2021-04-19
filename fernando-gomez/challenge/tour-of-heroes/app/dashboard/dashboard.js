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

const topHeroAnchor = (heroId) => {
  const heroAnchor = document.createElement('a');
  const hero = getHero(heroId);
  heroAnchor.classList = 'topHeroes__anchor';
  heroAnchor.innerHTML = hero.name;
  heroAnchor.setAttribute('href', './../hero/hero-detail.html');
  heroAnchor.value = heroId;

  return heroAnchor;
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
  topHeroes.appendChild(topHeroAnchor(12));
  topHeroes.appendChild(topHeroAnchor(13));
  topHeroes.appendChild(topHeroAnchor(14));
  topHeroes.appendChild(topHeroAnchor(15));

  return topHeroes;
};

const searcherTitle = () => {
  const searchTitle = document.createElement('h3');
  searchTitle.classList = 'searcher__title';
  searchTitle.innerHTML = 'Hero search';
  return searchTitle;
};

const searcherInput = () => {
  const input = document.createElement('input');
  input.classList = 'searcher__input';
  return input;
};

const generateSearcher = () => {
  const searcherSection = document.createElement('section');
  const title = searcherTitle();
  const input = searcherInput();
  searcherSection.classList = 'searcher';

  searcherSection.appendChild(title);
  searcherSection.appendChild(input);

  return searcherSection;
};

const messagesTitle = () => {
  const title = document.createElement('h2');
  title.classList = 'messages__title';
  title.innerHTML = 'Messages';
  return title;
};

const singleLogMessage = (logMessage) => {
  const message = document.createElement('li');
  message.innerHTML = logMessage;

  return message;
};

const messagesLog = () => {
  const title = messagesTitle();
  const log = document.createElement('ul');
  const message = singleLogMessage('lorem lorem');

  log.appendChild(title);
  log.appendChild(message);

  return log;
};

const messagesSection = () => {
  const section = document.createElement('section');
  const messages = messagesLog();
  section.classList = 'messages';

  section.appendChild(messages);
  return messages;
};

const generateDashboard = () => {
  const navigator = generateNavigator();
  const topHeroes = generateTopHeroes();
  const searcher = generateSearcher();
  const messages = messagesSection();

  container.appendChild(navigator);
  container.appendChild(topHeroes);
  container.appendChild(searcher);
  container.appendChild(messages);
};

generateDashboard();
