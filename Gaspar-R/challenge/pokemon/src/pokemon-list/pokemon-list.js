createElement('h1', 'title', 'Pokemon List', '.div__main');

createElement('footer', 'links', '', '.div__main');

const dashboard = createElement('a', 'dashboardBtn', 'Dashboard', '.links');
dashboard.setAttribute('href', '../dashboard/dashboard.html');

const pokemonList = fetchPokemonList(url);

// pokemonList.then((data) => data.results.forEach((element) => { console.log(element.name); }));

// function createElement(tag, className = null, text = null, parent = null) {

pokemonList.then((data) => data.results.forEach((element) => {
  // createList(element,"lista","main")
  createList(element.name, 'lista', '.div__main');
}));

// function createList(text, className = null, parent = null) {
