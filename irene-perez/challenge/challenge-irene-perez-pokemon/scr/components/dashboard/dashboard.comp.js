const main = document.querySelector('.dashboard');

function createDashboard() {
  const header = createElementHtml('header', null, null, main);
  const logoPoke = createElementHtml('img', null, null, header);
  logoPoke.setAttribute('src', './../../img/pokemon-logo.png');
  const prevButton = createElementHtml('button', 'Atrás', null, header);
  const nextButton = createElementHtml('button', 'Siguiente', null, header);
  createElementHtml('h2', 'Pokemons List:', null, header);
  const ul = createElementHtml('ul', null, null, header);
  createPokeList(ul);
}
createDashboard();

function createPokeList(ul) {
  const result = getData('https://pokeapi.co/api/v2/pokemon?limit=150&offset=0');
  result.then((element) => {
    element.results.forEach((pokemon) => {
      const pokemonItem = createElementHtml('li', null, null, ul);
      const pokemonLink = createElementHtml('a', pokemon.name, './../../details/details.html', pokemonItem);
      const detailsPoke = getDataDetails(pokemon.name);
      detailsPoke.then((element) => {
        const pokeImg = createElementHtml('img', null, null, pokemonItem);
        pokeImg.setAttribute('src', `${element.sprites.front_shiny}`);
      });
    });
  });
}
