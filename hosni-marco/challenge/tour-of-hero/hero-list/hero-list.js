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

function addHeroesInput() {
  const createH2 = document.createElement('h2');
  createH2.setAttribute('id', 'my-hero-title');
  createH2.innerHTML = 'My Heroes';
  nodeContainer.appendChild(createH2);
  //  input
  const createLabel = document.createElement('label');
  createLabel.setAttribute('for', 'hero-name');
  createLabel.setAttribute('id', 'hero-name');
  createLabel.innerHTML = 'Hero name:';
  nodeContainer.appendChild(createLabel);

  const createInput = document.createElement('input');
  createInput.setAttribute('type', 'text');
  createInput.setAttribute('id', 'input-hero-name');
  nodeContainer.appendChild(createInput);
  //  button
  const createAddButton = document.createElement('button');
  createAddButton.setAttribute('id', 'add-button');
  createAddButton.innerHTML = 'Add hero';
  nodeContainer.appendChild(createAddButton);
}

function createHeroList() {
  const createUl = document.createElement('ul');
  createUl.setAttribute('id', 'hero-ul');
  nodeContainer.appendChild(createUl);

  heroes.forEach((element, index) => {
    const createLi = document.createElement('li');
    createLi.setAttribute('id', 'hero-li');
    createUl.appendChild(createLi);

    const createSpan = document.createElement('span');
    createSpan.setAttribute('id', `id-hero-${index}`);
    createSpan.innerHTML = element.id;
    createLi.appendChild(createSpan);

    const createLinkId = document.createElement('a');
    createLinkId.setAttribute('id', 'id-hero-list');
    createLinkId.innerHTML = element.name;
    createLi.appendChild(createLinkId);
  });
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
addHeroesInput();
createHeroList();
messageDivContainer();
