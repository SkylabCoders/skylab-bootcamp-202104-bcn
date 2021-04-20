function createDomElement(parent, element, text, href, id, elementClass) {
  const elementToCreate = document.createElement(element);
  if (text) {
    elementToCreate.innerText = text;
  }
  if (href) {
    elementToCreate.setAttribute('href', href);
  }
  if (id) {
    elementToCreate.setAttribute('id', id);
  }

  if (elementClass) {
    elementToCreate.setAttribute('class', elementClass);
  }
  parent.appendChild(elementToCreate);
  return elementToCreate;
}

function fetchHeroes(url) {
  return fetch(url)
    .then((response) => response.json())
    .then((data) => data);
}
