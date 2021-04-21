const container = document.querySelector('.container');

const mainTitle = () => {
  const title = document.createElement('h1');
  title.innerHTML = 'Tour of heroes';
  title.classList = 'navigator__title';
  return title;
};

const navigationButton = (name) => {
  const newButton = document.createElement('a');
  newButton.innerHTML = name;
  newButton.setAttribute('href', `./../${name}/${name}.html`);

  return newButton;
};

const generateNavigator = () => {
  const navigator = document.createElement('div');
  const title = mainTitle();
  const dashboardButton = navigationButton('dashboard');
  const heroesButton = navigationButton('heroes');
  navigator.classList = 'navigator';
  navigator.appendChild(title);
  navigator.appendChild(dashboardButton);
  navigator.appendChild(heroesButton);
  return navigator;
};

const searcherTitle = () => {
  const searchTitle = document.createElement('h2');
  searchTitle.classList = 'searcher__title';
  searchTitle.innerHTML = 'My heroes';
  return searchTitle;
};

const searcherSubtitle = () => {
  const subtitle = document.createElement('h3');
  subtitle.classList = 'searcher__subtitle';
  subtitle.innerHTML = 'Hero name:';
  return subtitle;
};

const searcherInput = () => {
  const input = document.createElement('input');
  input.classList = 'searcher__input';
  return input;
};

const addHeroButton = (heroId, heroName) => {
  const newButton = document.createElement('a');
  newButton.innerHTML = 'Add hero';
  newButton.setAttribute('href', `./../heroes/heroes.html?heroID=${heroId}&heroName=${heroName}`);
  return newButton;
};

const generateSearcher = () => {
  const searcherSection = document.createElement('section');
  const title = searcherTitle();
  const subtitle = searcherSubtitle();
  const input = searcherInput();
  const addButton = addHeroButton();

  searcherSection.classList = 'searcher';

  searcherSection.appendChild(title);
  searcherSection.appendChild(subtitle);
  searcherSection.appendChild(input);
  searcherSection.appendChild(addButton);

  return searcherSection;
};

const messagesTitle = () => {
  const title = document.createElement('h2');
  title.classList = 'messages__title';
  title.innerHTML = 'Messages';

  return title;
};

const heroListElement = (heroObject) => {
  const hero = document.createElement('li');
  const heroAnchor = document.createElement('a');
  heroAnchor.innerText = `${heroObject.id} --> ${heroObject.name}`;
  heroAnchor.setAttribute('href', `./../hero-detail/hero-detail.html?heroID=${heroObject.id}&heroName=${heroObject.name}`);
  hero.appendChild(heroAnchor);

  return hero;
};

const generateHeroesList = (heroes) => {
  const list = document.createElement('ul');
  heroes.forEach((hero) => {
    const heroElement = heroListElement(hero);
    list.appendChild(heroElement);
  });
  return list;
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

const generateHeroesFeed = (heroes) => {
  const navigator = generateNavigator();
  const searcher = generateSearcher();
  const heroesList = generateHeroesList(heroes);
  const messages = messagesSection();

  container.appendChild(navigator);
  container.appendChild(searcher);
  container.appendChild(heroesList);
  container.appendChild(messages);
};

const getFetchHeroesData = () => {
  fetch('../superHeroData.json')
    .then((response) => response.json())
    .then((data) => {
      generateHeroesFeed(data);
    });
};

getFetchHeroesData();
