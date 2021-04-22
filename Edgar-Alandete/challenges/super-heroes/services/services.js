function createDomElement(parent, element, text, attributes) {
  const elementToCreate = document.createElement(element);
  if (text) {
    elementToCreate.innerText = text;
  }
  if (attributes) {
    attributes.forEach((attribute) => {
      elementToCreate.setAttribute(attribute.name, attribute.value);
    });
  }

  parent.appendChild(elementToCreate);
  return elementToCreate;
}

function fetchHeroes(url) {
  return fetch(url)
    .then((response) => response.json())
    .then((data) => data);
}

const getHeroById = (url, heroId) => fetch(url)
  .then((response) => response.json())
  .then((data) => {
    const heroData = data.find((hero) => hero.id === parseInt(heroId, 10));
    return heroData;
  });
