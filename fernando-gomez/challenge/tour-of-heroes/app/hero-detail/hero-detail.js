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

const mainTitle = () => {
  const title = document.createElement('h1');
  title.innerHTML = 'Tour of heroes';
  title.classList = 'navigator__title';
  return title;
};

const navigationButton = (name) => {
  const newButton = document.createElement('button');
  newButton.innerHTML = name;
  newButton.setAttribute('onclick', `location.href='./../${name}/${name}.html'`);

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

const heroNameTitle = (heroName) => {
  const heroTitle = document.createElement('h2');
  heroTitle.classList = 'details__title';
  heroTitle.innerHTML = `${heroName} Details`;
  return heroTitle;
};

const heroNumberId = (id) => {
  const heroId = document.createElement('p');
  heroId.classList = 'details__subtitle';
  heroId.innerHTML = `id: ${id}`;
  return heroId;
};

const heroInputTitle = () => {
  const inputTitle = document.createElement('p');
  inputTitle.classList = 'details__title';
  inputTitle.innerHTML = 'Hero name:';
  return inputTitle;
};

const currentNameInput = (heroName) => {
  const input = document.createElement('input');
  input.classList = 'details__input';
  input.setAttribute('placeholder', `${heroName}`);
  return input;
};

const generateDetails = (hero) => {
  const detailsSection = document.createElement('section');
  const title = heroNameTitle(hero.name);
  const id = heroNumberId(hero.id);
  const inputTitle = heroInputTitle();
  const input = currentNameInput(hero.name);

  detailsSection.classList = 'details';

  detailsSection.appendChild(title);
  detailsSection.appendChild(id);
  detailsSection.appendChild(inputTitle);
  detailsSection.appendChild(input);

  return detailsSection;
};

const goBackButton = () => {
  const goBack = document.createElement('button');
  goBack.classList = 'go-back';
  goBack.innerHTML = 'go back';
  goBack.setAttribute('onclick', "location.href='./../dashboard/dashboard.html'");

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

const generateHeroesFeed = () => {
  const navigator = generateNavigator();
  const details = generateDetails(heroes[1]);
  const messages = messagesSection();
  const buttonsContainer = backSaveContainer();

  container.appendChild(navigator);
  container.appendChild(details);
  container.appendChild(buttonsContainer);
  container.appendChild(messages);
};

generateHeroesFeed();
