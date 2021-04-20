function getAllHeroes(url) {
  return fetch(url)
    .then((response) => response.json())
    .then((data) => data);
}

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
