const mainTitle = createNewElement('h1', 'mainTitle', 'Pokemons', main);

const topListTitle = createNewElement('h2', 'topList__title', 'Top List', main);

const topList = createNewElement('ul', 'topList', null, main);

for (let i = 0; i < 4; i += 1) {
  const elementsList = createNewElement('li', 'topList-elements', 'hola', topList);
  const link = createNewElement('a', 'linkTop', 'hola', elementsList);
  elementsList.appendChild(link);
  link.href = 'dsgd';
}

const footer = createNewElement('footer', 'footer__div', null, main);

const detailsNavList = createNewElement('ul', 'footer__nav', null, footer);

for (let i = 0; i < 2; i += 1) {
  const elementsList = createNewElement('li', 'topList-elements', 'hola', footer);
  const link = createNewElement('a', 'linkTop', 'hola', elementsList);
  elementsList.appendChild(link);
  link.href = 'dsgd';
}
