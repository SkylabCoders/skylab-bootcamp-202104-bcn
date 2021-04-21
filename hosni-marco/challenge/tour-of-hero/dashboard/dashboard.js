const nodeContainer = document.getElementById('main');

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
  { id: 20, name: 'Tornado' }
];

function addTitle(text) {
  const title = document.createElement('h1');
  title.innerHTML = text;
  title.classList.add = 'title';

  nodeContainer.appendChild(title);
}

function addLink() {
  const createNav = document.createElement('nav');
  createNav.setAttribute('id', 'nav');
  nodeContainer.appendChild(createNav);

  const createLinkDashboard = document.createElement('a');
  createLinkDashboard.setAttribute('id', 'dashboard-link');
  createNav.appendChild(createLinkDashboard);
  createLinkDashboard.innerHTML = 'Dashboard';
  createLinkDashboard.href = './dashboard.html';

  const createLinkHeroDetails = document.createElement('a');
  createLinkHeroDetails.setAttribute('id', 'hero-list-link');
  createNav.appendChild(createLinkHeroDetails);
  createLinkHeroDetails.innerHTML = 'hero list';
  createLinkHeroDetails.href = './../hero-list/hero-list.html';
}

function addH2() {
  const createH2 = document.createElement('h2');
  createH2.innerHTML = 'top heroes';
  createH2.setAttribute('id', 'h2-dashboard');
  nodeContainer.appendChild(createH2);
}

function addHeroesList() {
  const createUl = document.createElement('ul');
  createUl.setAttribute('id', 'common-ul');
  nodeContainer.appendChild(createUl);

  for (let i = 0; i < 4; i += 1) {
    const createIl = document.createElement('li');
    createIl.setAttribute('id', `common-li-${i}`);
    createUl.appendChild(createIl);

    const createLinkHero = document.createElement('a');
    createLinkHero.setAttribute('id', `link-${heroes[i].name}`);
    createLinkHero.innerHTML = heroes[i].name;
    createIl.appendChild(createLinkHero);
    createLinkHero.href = './../hero-detail/hero-detail.html';
  }
}

function addLabelInputs() {
  const createLabel = document.createElement('label');
  createLabel.setAttribute('for', 'hero-search');
  createLabel.setAttribute('id', 'hero-search');
  createLabel.innerHTML = 'hero search';
  nodeContainer.appendChild(createLabel);

  const createInput = document.createElement('input');
  createInput.setAttribute('id', 'hero-search');
  createInput.setAttribute('type', 'text');
  createLabel.appendChild(createInput);

  const createButton = document.createElement('button');
  createButton.setAttribute('id', 'button-input');
  createButton.innerHTML = 'Add Hero';
  createLabel.appendChild(createButton);
}

function messageDivContainer() {
  const createDiv = document.createElement('div');
  createDiv.setAttribute('id', 'message-container');
  nodeContainer.appendChild(createDiv);

  const createMessageP = document.createElement('p');
  createMessageP.setAttribute('id', 'messages');
  createMessageP.innerHTML = 'messages';
  createDiv.appendChild(createMessageP);

  const createButton = document.createElement('button');
  createButton.setAttribute('id', 'clear-message');
  createButton.innerHTML = 'clear messages';
  createDiv.appendChild(createButton);

  const createUl = document.createElement('ul');
  createUl.setAttribute('id', 'common-ul__message');
  createDiv.appendChild(createUl);

  for (let i = 0; i < 4; i += 1) {
    const createIl = document.createElement('il');
    createIl.setAttribute('id', `common-il__message-${i}`);
    createIl.innerHTML = 'creating list';
    createUl.appendChild(createIl);
  }
}

addTitle('tour of heroes');
addLink();
addH2();
addHeroesList();
addLabelInputs();
messageDivContainer();
