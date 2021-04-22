const main = document.querySelector('.dashboard');

const header = createElementHtml('header', null, null, main);
createElementHtml('h1', 'POKEMON', null, header);
createElementHtml('h2', 'Pokemons List:', null, header);
const ul = createElementHtml('ul', null, null, header);

result.then((list) => {
  const arrayPokemons = list;
  const newArray = chooseNumberPoke(arrayPokemons, 10);
  arrayPokemons.forEach((element) => {
    const li = createElementHtml('li', null, null, ul);
    createElementHtml('a', element.url, '../../details/details.html', li);
  });
});
