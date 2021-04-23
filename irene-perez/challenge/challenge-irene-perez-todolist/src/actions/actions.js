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
//   function getData(url) {
//     return fetch(url)
//       .then((response) => response.json())
//       .catch(() => { console.error('You are gonna die, muahahahaha!!'); });
//   }

//   function getDataDetails(name) {
//     return fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
//       .then((response) => response.json())
//       .catch(() => { console.error('You are gonna die, muahahahaha!!'); });
//   }
