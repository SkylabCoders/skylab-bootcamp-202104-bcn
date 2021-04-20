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
  type: 'a', classes: ['selector-group__link-heroes'], context: 'Heroes', url: 'index.html',
});
selectorGroup.append(linkHeroes);

const mainTitle = generateElement({ type: 'h3', classes: [], context: 'My Heroes' });
mainContent.append(mainTitle);
const highlitedHero = generateElement({ type: 'div', classes: ['higlited-hero'] });
const highlightHeroName = generateElement({ type: 'p', classes: ['highlighted-hero__name'], context: 'Peter' });
const highlightHeroDetailsButton = generateElement({
  type: 'a',
  context: 'View Details',
  classes: ['highlighted-hero__details-btn', '--inactive'],
  url: './../detalles/index.html',
});

function populateListWithIds(elementProperties) {
  const selectedItems = elementProperties.arrayOrigin
    .slice(elementProperties.extract.from, elementProperties.extract.to);
  selectedItems.forEach((element) => {
    const item = generateElement({ type: 'li', classes: ['heroes-list__item', 'heroes-list__item--inactive'] });
    const spanId = generateElement({ type: 'span', classes: ['heroes-list__item-id'] });
    const spanName = generateElement({ type: 'span', classes: ['heroes-list__item-name'] });
    item.onclick = function () {
      const allItems = document.querySelectorAll('.heroes-list__item');
      allItems.forEach((item) => {
        if (item.classList.contains('heroes-list__item--active')) {
          item.classList.remove('heroes-list__item--active');
          item.classList.add('heroes-list__item--inactive');
        }
      });
      item.classList.remove('heroes-list__item--inactive');
      item.classList.add('heroes-list__item--active');
      highlightHeroName.textContent = spanName.textContent;
    };
    spanId.textContent = element.id;
    spanName.textContent = element.name;
    item.append(spanId);
    item.append(spanName);
    elementProperties.parentElement.append(item);
  });
  return elementProperties.parentElement;
}
const heroesList = generateElement({ type: 'ul', classes: ['heroes-list'] });
mainContent.append(heroesList);
populateListWithIds({
  arrayOrigin: heroes,
  parentElement: heroesList,
  extract: { from: 0, to: 9 },
});

highlitedHero.append(highlightHeroName);
highlitedHero.append(highlightHeroDetailsButton);
mainContent.append(highlitedHero);

// highlightHeroDetailsButton.classList.replace('--inactive', '--active');
