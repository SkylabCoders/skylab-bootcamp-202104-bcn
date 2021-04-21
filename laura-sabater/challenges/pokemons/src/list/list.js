const mainTitle = createNewElement('h1', 'mainTitle', 'Pokemons', main);

const topList = createNewElement('ul', 'topList', null, main);

const names = pokemonsList.then((data) => data.results.forEach((element) => giveNames(element.name)));

function giveNames(name) {
  const elementsList = createNewElement('li', 'topList-elements', 'hola', topList);
  const link = createNewElement('a', 'linkTop', 'hola', elementsList);
  elementsList.appendChild(link);
  link.href = 'dsgd';
  link.innerHTML = name;
}
