const nodeContainer = document.getElementById('main');
const heroID = new URLSearchParams(location.search).get('heroID');

const getFetchHeroesData = async () => {
  const data = await (await fetch('./../store/superHeroData.json')).json();
  data.forEach((hero) => {
    if (hero.id === parseInt(heroID)) {
      document.getElementById('h2-hero-details').innerText = hero.name;
      document.getElementById('text-id-hero').innerText = hero.id;
    }
  });
};

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
  const createLinkDashboard = document.createElement('a');
  createLinkDashboard.setAttribute('id', 'dashboard-link');
  createNav.appendChild(createLinkDashboard);
  createLinkDashboard.innerHTML = 'Dashboard';
  createLinkDashboard.href = './../dashboard/dashboard.html';
  const createLinkHeroDetails = document.createElement('a');
  createLinkHeroDetails.setAttribute('id', 'hero-list-link');
  createNav.appendChild(createLinkHeroDetails);
  createLinkHeroDetails.innerHTML = 'hero list';
  createLinkHeroDetails.href = './../hero-list/hero-list.html';
}

function addDetails() {
  const createH2 = document.createElement('h2');
  createH2.setAttribute('id', 'h2-hero-details');
  nodeContainer.appendChild(createH2);
  const createP = document.createElement('p');
  createP.setAttribute('id', 'text-id-hero');
  nodeContainer.appendChild(createP);
}

function searchHero() {
  const createLabel = document.createElement('label');
  createLabel.setAttribute('for', 'hero-name');
  createLabel.setAttribute('id', 'hero-name');
  createLabel.innerHTML = 'Hero name';
  nodeContainer.appendChild(createLabel);
  const createInput = document.createElement('input');
  createInput.setAttribute('type', 'text');
  createInput.setAttribute('id', 'input-hero-name');
  nodeContainer.appendChild(createInput);
}

function addButtons() {
  const createGoBackButton = document.createElement('button');
  createGoBackButton.setAttribute('id', 'go-back-button');
  createGoBackButton.innerHTML = 'go back';
  nodeContainer.appendChild(createGoBackButton);
  const createSaveButton = document.createElement('button');
  createSaveButton.setAttribute('id', 'save-button');
  createSaveButton.innerHTML = 'save';
  nodeContainer.appendChild(createSaveButton);
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

const getFetchData = async () => {
  const data = await (await fetch('./../store/superHeroData.json')).json();
  data.filter((hero) => hero.id === 1);
};

addTittle('tour of heroes');
addLink();
addDetails();
searchHero();
addButtons();
messageDivContainer();
getFetchHeroesData();
