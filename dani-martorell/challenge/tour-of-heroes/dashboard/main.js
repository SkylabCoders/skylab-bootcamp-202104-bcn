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
const mainContent = document.querySelector('.content');
const headTitle = document.createElement('p');
const selectorGroup = document.createElement('div');
const navigatorDashboard = document.createElement('a');
const navigatorHeroes = document.createElement('a');
const mainTitle = document.createElement('h3');
const heroesUl = document.createElement('ul');

function populateList(array) {

}

headTitle.textContent = 'Tour of Heroes';
mainContent.appendChild(headTitle);
navigatorDashboard.setAttribute('href', 'index.html');
navigatorDashboard.textContent = 'Navigator';
navigatorDashboard.className = 'selector-group__navigator-dashboard';
navigatorHeroes.setAttribute('href', './../heroes/index.html');
navigatorHeroes.textContent = 'Heroes';
navigatorHeroes.className = 'selector-group__navigator-heroes';
selectorGroup.className = 'selector-group';
selectorGroup.append(navigatorDashboard);
selectorGroup.append(navigatorHeroes);
mainContent.appendChild(selectorGroup);
