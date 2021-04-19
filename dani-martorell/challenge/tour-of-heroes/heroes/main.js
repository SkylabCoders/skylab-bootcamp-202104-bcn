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

function generateElement(typeOfElement, classNamesArray = '', context = '', hrefURL = '#') {
  const element = document.createElement(typeOfElement);
  element.classList.add(...classNamesArray);
  if (typeOfElement === 'a') {
    element.setAttribute('href', hrefURL);
  }
  element.textContent = context;
  return element;
}

function populateList(arrayOrigin, parentElement, from, to) {
  const selectedItems = arrayOrigin.slice(from, to);
  selectedItems.forEach((element) => {
    const item = generateElement('li', ['heroes-list__item']);
    item.textContent = element.name;
    parentElement.append(item);
  });
  return parentElement;
}

const mainContent = document.querySelector('.content');
const headTitle = generateElement('div', ['head-title'], 'Tour of Heroes');
mainContent.append(headTitle);
const selectorGroup = generateElement('div', ['selector-group']);
mainContent.append(selectorGroup);
const linkDashboard = generateElement('a', ['selector-group__link-dasboard'], 'Dashboard', '.././dashboard/index.html');
selectorGroup.append(linkDashboard);
const linkHeroes = generateElement('a', ['selector-group__link-heroes'], 'Heroes', 'index.html');
selectorGroup.append(linkHeroes);
const mainTitle = generateElement('h3', [], 'My Heroes');
mainContent.append(mainTitle);
const heroesList = generateElement('ul', ['heroes-list']);
mainContent.appendChild(heroesList);
populateList(heroes, heroesList, 0, 10);
