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
