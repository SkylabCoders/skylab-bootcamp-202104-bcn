function createElement(typeOfElement, className = null, innerText = null) {
  const element = document.createElement(typeOfElement);
  if (className !== null) { element.className = className; }
  if (className !== null) { element.innerText = innerText; }
  return element;
}

function bringPokemons(url) {
  return fetch(url)
    .then((response) => response.json())
    .then((data) => data);
}
