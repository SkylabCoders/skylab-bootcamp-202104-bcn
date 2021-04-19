function generateElement(typeOfElement, classNamesArray = '', context = '', hrefURL = '#') {
  const element = document.createElement(typeOfElement);
  element.classList.add(...classNamesArray);
  if (typeOfElement === 'a') {
    element.setAttribute('href', hrefURL);
  }
  element.textContent = context;
  return element;
}

function populateList(arrayOrigin, parentElement) {
  const selectedItems = arrayOrigin.slice(1, 5);
  selectedItems.forEach((element) => {
    const item = generateElement('li', ['heroes-list__item']);
    item.textContent = element.name;
    parentElement.append(item);
  });
  return parentElement;
}
