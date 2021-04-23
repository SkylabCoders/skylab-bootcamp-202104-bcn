const main = document.querySelector('main');

createHeader(main, '.');

const section = createNewElement('section', 'pokemons__container', main);

for (let i = 0; i < 4; i += 1) {
  createNewElement('img', 'pokemons__image', section);
}

createFooter(main);
