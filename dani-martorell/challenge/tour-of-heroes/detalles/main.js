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

function generateElement(elementProperties) {
  const element = document.createElement(elementProperties.type);
  element.classList.add(...elementProperties.classes);
  element.id = elementProperties.id || '';
  if (elementProperties.type === 'a') {
    element.setAttribute('href', elementProperties.url);
  }
  element.textContent = elementProperties.context;
  return element;
}

function populateListWithIds(elementProperties) {
  const selectedItems = elementProperties.arrayOrigin
    .slice(elementProperties.extract.from, elementProperties.extract.to);
  selectedItems.forEach((element) => {
    const item = generateElement({ type: 'li', classes: ['heroes-list__item'] });
    const spanId = generateElement({ type: 'span', classes: ['heroes-list__item-id'] });
    const spanName = generateElement({ type: 'span', classes: ['heroes-list__item-name'] });
    spanId.textContent = element.id;
    spanName.textContent = element.name;
    item.append(spanId);
    item.append(spanName);
    elementProperties.parentElement.append(item);
  });
  return elementProperties.parentElement;
}

const mainContent = document.querySelector('.content');
const headTitle = generateElement({ type: 'div', classes: ['head-title'], context: 'Tour of Heroes' });
mainContent.append(headTitle);
const selectorGroup = generateElement({ type: 'div', classes: ['selector-group'] });
mainContent.append(selectorGroup);
const linkDashboard = generateElement({
  type: 'a', classes: ['selector-group__link-dasboard'], context: 'Dashboard', url: './../dashboard/index.html',
});
selectorGroup.append(linkDashboard);
const linkHeroes = generateElement({
  type: 'a', classes: ['selector-group__link-heroes'], context: 'Heroes', url: './../heroes/index.html',
});
selectorGroup.append(linkHeroes);
const heroeTitle = generateElement({ type: 'h3', classes: ['heroe-title'], context: 'Magneta details!' });
mainContent.append(heroeTitle);
const heroeInfo = generateElement({ type: 'div', classes: ['heroe-data'] });
mainContent.append(heroeInfo);
const heroeLabel = generateElement({ type: 'label', classes: [], context: 'Name' });
heroeLabel.setAttribute('for', 'hname');
const heroeId = generateElement({ type: 'p', classes: ['heroe-data__id'], context: 12 });
const heroeName = generateElement({ type: 'input', classes: ['heroe-data__name'] });

heroeName.setAttribute('type', 'text');
heroeName.setAttribute('id', 'hname');
heroeName.setAttribute('name', 'hname');
heroeInfo.append(heroeId);
heroeInfo.append(heroeLabel);
heroeInfo.append(heroeName);

heroeInfo.append(heroeLabel);
mainContent.append(heroeInfo);
