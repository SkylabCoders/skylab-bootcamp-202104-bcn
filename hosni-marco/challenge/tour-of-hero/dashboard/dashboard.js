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

function addTittle(text) {
  const title = document.createElement('h1');
  title.innerHTML = text;
  title.classList.add = 'title';

  nodeContainer.appendChild(title);
}

function addLink() {
  const createNav = document.createElement('nav');
  createNav.setAttribute('id', 'nav');
  nodeContainer.appendChild(createNav);
  for (let i = 0; i < 2; i += 1) {
    const createLink = document.createElement('a');
    createLink.setAttribute('id', `dashboard-link-${i}`);
    createNav.appendChild(createLink);
  }
  document.getElementById('dashboard-link-0').innerHTML = 'Dashboard';
  document.getElementById('dashboard-link-1').innerHTML = 'Heroes';
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
    const createIl = document.createElement('il');
    createIl.setAttribute('id', `common-il-${i}`);
    createUl.appendChild(createIl);
  }
}

document.getElementById('common-il-0').innerHTML = heroes[1].name;
document.getElementById('common-il-1').innerHTML = heroes[2].name;
document.getElementById('common-il-2').innerHTML = heroes[3].name;
document.getElementById('common-il-3').innerHTML = heroes[4].name;

function addLabelInputs() {
  const createLabel = document.createElement('label');
  createLabel.setAttribute('for', 'hero-search');
  createLabel.setAttribute('id', 'hero-search');
  createLabel.innerHTML = 'hero search';
  nodeContainer.appendChild(createLabel);

  const createInput = document.createElement('input');
  createInput.setAttribute('id', 'hero-search');
  createInput.setAttribute('type', 'text');
  nodeContainer.appendChild(createInput);
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

addTittle('tour of heroes');
addLink();
addH2();
addHeroesList();
addLabelInputs();
messageDivContainer();
