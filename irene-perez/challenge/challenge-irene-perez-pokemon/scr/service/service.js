const createElementHtml = (element, text, href, parent, id) => {
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
  parent.appendChild(elementToCreate);
  return elementToCreate;
};

async function getPokemons(url) {
  const list = await fetch(url);
  const parsedList = await list.json();
  console.log(parsedList);
}

const result = getPokemons('https://pokeapi.co/api/v2/pokemon/');

function chooseNumberPoke(array, num) {
  const newArray = [];
  for (let i = 0; i < num; i + 1) {
    newArray.push(array[i]);
  }
  return newArray;
}
