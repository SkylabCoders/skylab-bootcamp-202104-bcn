// function createElementHtml(elementType, className, text, parent, href) {
//   const element = document.createElement(elementType);
//   element.innerHTML = text;
//   parent.appendChild(element);
//   element.href = href;
//   return element;
// }

const createElementDash = (element, text, href, parent, id) => {
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
  return parsedList;
}

function chooseNumberPoke(array, num) {
  const newArray = [];
  for (let i = 0; i < num; i + 1) {
    newArray.push(array[i]);
  }
  return newArray;
}

const result = getPokemons('https://pokeapi.co/api/v2/pokemon/');
result.then((list) => {
  const arrayPokemons = list.results;
  const newArray = chooseNumberPoke(arrayPokemons, 10);
  return console.log(newArray);
});
