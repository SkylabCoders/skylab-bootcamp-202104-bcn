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
// const selectorGroup = document.createElement('div');
// const navigatorDashboard = document.createElement('a');
// const navigatorHeroes = document.createElement('a');
// const mainTitle = document.createElement('h3');
// const heroesUl = document.createElement('ul');

function generateElement(typeOfElement, classNamesArray = '', context = '', hrefURL = '#') {
  const element = document.createElement(typeOfElement);
  element.classList.add(...classNamesArray);
  if (typeOfElement === 'a') {
    element.setAttribute('href', hrefURL);
  }
  element.textContent = context;
  return element;
}
const headTitle = generateElement('div', ['head-title'], 'Tour of Heroes');
mainContent.append(headTitle);
const selectorGroup = generateElement('div', ['selector-group']);
mainContent.append(selectorGroup);
const linkDashboard = generateElement('a', ['selector-group__link-dasboard'], 'Dashboard', 'index.html');
selectorGroup.append(linkDashboard);
const linkHeroes = generateElement('a', ['selector-group__link-heroes'], 'Heroes', './../heroes/index.html');
selectorGroup.append(linkHeroes);
const mainTitle = generateElement('h3', [], 'Top Heroes');
mainContent.append(mainTitle);

// function createheadTitle(name) {
//   const headTitle = document.createElement('p');
//   headTitle.textContent = 'Tour of Heroes';
//   mainContent.appendChild(headTitle);
// }
// function createTitle(name) {
//   const mainTitle = document.createElement('h3');
//   mainTitle.textContent = name;
//   mainContent.appendChild(mainTitle);
// }
