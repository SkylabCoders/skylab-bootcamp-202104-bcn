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

  detailsSection.classList = 'details';
  detailsSection.appendChild(title);
  detailsSection.appendChild(id);
  detailsSection.appendChild(inputTitle);
  detailsSection.appendChild(input);

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

const heroPowerStats = (powerStats) => {
  const result = document.createElement('ul');
  const intelligence = heroDetail('li', `Intelligence: ${powerStats.intelligence}`);
  const strength = heroDetail('li', `Strength: ${powerStats.strength}`);
  const speed = heroDetail('li', `Speed: ${powerStats.speed}`);
  const durability = heroDetail('li', `Durability: ${powerStats.durability}`);
  const power = heroDetail('li', `Power: ${powerStats.power}`);
  const combat = heroDetail('li', `Combat: ${powerStats.combat}`);

  result.appendChild(intelligence);
  result.appendChild(strength);
  result.appendChild(speed);
  result.appendChild(durability);
  result.appendChild(power);
  result.appendChild(combat);

  return result;
};

const heroAppearance = (appearance) => {
  const result = document.createElement('ul');
  const gender = heroDetail('li', `Gender: ${appearance.gender}`);
  const race = heroDetail('li', `Race: ${appearance.race}`);
  const height = heroDetail('li', `Height: ${appearance.height[0]} and ${appearance.height[1]}`);
  const weight = heroDetail('li', `Weight: ${appearance.weight[0]} and ${appearance.weight[1]}`);
  const eyeColor = heroDetail('li', `Eye color: ${appearance.eyeColor}`);
  const hairColor = heroDetail('li', `Hair color: ${appearance.hairColor}`);

  result.appendChild(gender);
  result.appendChild(race);
  result.appendChild(height);
  result.appendChild(weight);
  result.appendChild(eyeColor);
  result.appendChild(hairColor);

  return result;
};

const heroBiography = (biography) => {
  const result = document.createElement('ul');
  const fullName = heroDetail('li', `Full name: ${biography.fullName}`);
  const alterEgos = heroDetail('li', `Full name: ${biography.alterEgos}`);
  const aliasesTitle = heroDetail('h3', 'Aliases:');
  const placeOfBirth = heroDetail('li', `Place of birth: ${biography.placeOfBirth}`);
  const firstAppearance = heroDetail('li', `First appearance: ${biography.firstAppearance}`);
  const publisher = heroDetail('li', `Publisher: ${biography.publisher}`);
  const alignment = heroDetail('li', `Alignment: ${biography.alignment}`);

  result.appendChild(fullName);
  result.appendChild(alterEgos);
  result.appendChild(aliasesTitle);
  biography.aliases.forEach((alias) => result.appendChild(heroDetail('li', alias)));
  result.appendChild(placeOfBirth);
  result.appendChild(firstAppearance);
  result.appendChild(publisher);
  result.appendChild(alignment);

  return result;
};

const heroWork = (work) => {
  const result = document.createElement('ul');
  const occupation = heroDetail('li', `Occupation: ${work.occupation}`);
  const base = heroDetail('li', `Base: ${work.base}`);

  result.appendChild(occupation);
  result.appendChild(base);

  return result;
};

const heroConnections = (connections) => {
  const result = document.createElement('ul');
  const groupAffiliation = heroDetail('li', `Group affiliation: ${connections.groupAffiliation}`);
  const relatives = heroDetail('li', `Relatives: ${connections.relatives}`);

  result.appendChild(groupAffiliation);
  result.appendChild(relatives);

  return result;
};

const heroImage = (images) => {
  const result = document.createElement('img');
  result.setAttribute('src', `${images.sm}`);

  return result;
};

const heroDetailsSection = (heroObject) => {
  const detailSection = document.createElement('section');
  const name = heroDetail('h2', heroObject.name);
  const id = heroDetail('h3', heroObject.id);
  const slug = heroDetail('h3', heroObject.slug);
  const powerStatsTitle = heroDetail('h3', 'Power stats');
  const powerStats = heroPowerStats(heroObject.powerstats);
  const appearanceTitle = heroDetail('h3', 'Appearance');
  const appearanceList = heroAppearance(heroObject.appearance);
  const biographyTitle = heroDetail('h3', 'Biography');
  const biographyList = heroBiography(heroObject.biography);
  const workTitle = heroDetail('h3', 'Work');
  const workList = heroWork(heroObject.work);
  const connectionsTitle = heroDetail('h3', 'Connections');
  const connectionsList = heroConnections(heroObject.connections);
  const image = heroImage(heroObject.images);

  detailSection.appendChild(name);
  detailSection.appendChild(image);
  detailSection.appendChild(id);
  detailSection.appendChild(slug);
  detailSection.appendChild(powerStatsTitle);
  detailSection.appendChild(powerStats);
  detailSection.appendChild(appearanceTitle);
  detailSection.appendChild(appearanceList);
  detailSection.appendChild(biographyTitle);
  detailSection.appendChild(biographyList);
  detailSection.appendChild(workTitle);
  detailSection.appendChild(workList);
  detailSection.appendChild(connectionsTitle);
  detailSection.appendChild(connectionsList);

  return detailSection;
};

const generateHeroesFeed = (data) => {
  const heroDetails = heroDetailsSection(data);
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
