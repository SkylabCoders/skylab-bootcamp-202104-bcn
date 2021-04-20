const container = document.querySelector('.container');

const mainTitle = () => {
  const title = document.createElement('h1');
  title.innerHTML = 'Tour of heroes';
  title.classList = 'navigator__title';
  return title;
};

const urlParams = new URLSearchParams(window.location.search);
const paramID = urlParams.getAll('heroID')[0];
const paramHeroName = urlParams.getAll('heroName')[0];
const paramHeroObject = urlParams.getAll('heroObject')[0];

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

const heroNameTitle = () => {
  const heroTitle = document.createElement('h2');
  heroTitle.classList = 'details__title';
  heroTitle.innerHTML = `${paramHeroName} Details`;
  return heroTitle;
};

const heroNumberId = () => {
  const heroId = document.createElement('p');
  heroId.classList = 'details__subtitle';
  heroId.innerHTML = `id: ${paramID}`;
  return heroId;
};

const heroInputTitle = () => {
  const inputTitle = document.createElement('p');
  inputTitle.classList = 'details__title';
  inputTitle.innerHTML = 'Hero name:';
  return inputTitle;
};

const heroDetailsGenerator = () => {
  const paragraph = document.createElement('p');
  paragraph.classList = 'details__paragraph';
  paragraph.innerHTML = `${paramHeroObject}`;
  return paragraph;
};

const currentNameInput = () => {
  const input = document.createElement('input');
  input.classList = 'details__input';
  input.setAttribute('placeholder', `${paramHeroName}`);
  return input;
};

const generateDetails = () => {
  const detailsSection = document.createElement('section');
  const title = heroNameTitle();
  const id = heroNumberId();
  const inputTitle = heroInputTitle();
  const input = currentNameInput();
  const paragraphWithDetails = heroDetailsGenerator();

  detailsSection.classList = 'details';

  detailsSection.appendChild(title);
  detailsSection.appendChild(id);
  detailsSection.appendChild(inputTitle);
  detailsSection.appendChild(input);
  detailsSection.appendChild(paragraphWithDetails);

  return detailsSection;
};

const goBackButton = () => {
  const goBack = document.createElement('a');
  goBack.classList = 'go-back';
  goBack.innerHTML = 'go back';
  goBack.setAttribute('href', './../dashboard/dashboard.html');

  return goBack;
};

const saveButton = () => {
  const goBack = document.createElement('button');
  goBack.classList = 'save';
  goBack.innerHTML = 'save';
  return goBack;
};

const backSaveContainer = () => {
  const buttonsContainer = document.createElement('section');
  const goBack = goBackButton();
  const save = saveButton();

  buttonsContainer.appendChild(goBack);
  buttonsContainer.appendChild(save);

  return buttonsContainer;
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

const heroDetail = (tag, data) => {
  const element = document.createElement(tag);
  element.innerText = data;
  return element;
};

const heroDetailsList = (heroObject) => {
  const detailsList = document.createElement('ul');
  const name = heroDetail('h2', heroObject.name);
  const id = heroDetail('p', heroObject.id);
  const slug = heroDetail('p', heroObject.slug);

  detailsList.appendChild(name);
  detailsList.appendChild(id);
  detailsList.appendChild(slug);

  return detailsList;
};

const generateHeroesFeed = (data) => {
  const heroDetails = heroDetailsList(data);
  const navigator = generateNavigator();
  const details = generateDetails();
  const messages = messagesSection();
  const buttonsContainer = backSaveContainer();

  container.appendChild(navigator);
  container.appendChild(details);
  container.appendChild(buttonsContainer);
  container.appendChild(heroDetails);
  container.appendChild(messages);
};

const getFetchHeroesData = () => {
  fetch('../superHeroData.json')
    .then((response) => response.json())
    .then((data) => {
      generateHeroesFeed(data.find((hero) => hero.id.toString() === paramID));
    });
};

getFetchHeroesData();
