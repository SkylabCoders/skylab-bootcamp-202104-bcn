const main = document.querySelector('.details');

const header = createElementHtml('header', null, null, main);
createElementHtml('h1', 'POKEMON', null, header);
createElementHtml('h2', 'Pokemons Detalles:', null, header);
const ul = createElementHtml('ul', null, null, header);

const result = getPokemons('https://pokeapi.co/api/v2/pokemon/');
result.then((list) => {
  const arrayPokemons = list.results;
  const newArray = chooseNumberPoke(arrayPokemons, 10);
  newArray.forEach((element) => {
    const li = createElementHtml('li', null, null, ul);
    createElementHtml('a', null, null, li);
  });
});
