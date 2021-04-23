const main = document.querySelector('main');

createHeader(main, './../..');

const section = createNewElement('section', 'pokemons__container', main);

const listTitle = createNewElement('h2', 'mainTitle', section);
listTitle.innerHTML = 'Pokemons List';

const topList = createNewElement('ul', 'topList', section);

function giveNames(name) {
  const elementsList = createNewElement('li', 'topList-elements', topList);
  const link = createNewElement('a', 'linkTop', elementsList);
  elementsList.appendChild(link);
  link.href = 'dsgd';
  link.innerHTML = name;
}

const names = pokemonsList.then((data) => data.results.forEach((element) => giveNames(element.name)));

createFooter(main);
