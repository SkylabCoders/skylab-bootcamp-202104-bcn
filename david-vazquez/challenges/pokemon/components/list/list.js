const body = document.querySelector('.body');

function createHeader() {
  const header = createHtmlElements(body, 'header', 'header', null);
  const headerTitle = createHtmlElements(header, 'h1', 'header__title', 'POKEMON');
  const navBar = createHtmlElements(header, 'ul', 'header__navbar', null);
  createNavButton(navBar, 'Dashboard', './../dashboard/dashboard.html');
  createNavButton(navBar, 'List', './list.html');
  createMain();
}

function createNavButton(parent, text, url) {
  const navButton = createHtmlElements(parent, 'li', 'navbar__button', null);
  const navLink = createHtmlElements(navButton, 'a', null, text);
  navLink.setAttribute('href', url);
}

function createMain() {
  const pokemonListContainer = createHtmlElements(body, 'div', 'pokemons', null);
  const pokemonListTitle = createHtmlElements(pokemonListContainer, 'h2', 'pokemons__title', 'Choose your pokemon!!');
  const pokemonList = createHtmlElements(pokemonListContainer, 'ul', 'pokemons__list', null);
  const myPokemons = getData();
  myPokemons.then((element) => {
    element.results.forEach((firstPokemon) => {
      const pokemon = createHtmlElements(pokemonList, 'li', 'pokemon-top__item', null);
      const firstPokemonNames = createHtmlElements(pokemon, 'a', null, `${firstPokemon.name}`);
      firstPokemonNames.setAttribute('href', `http://127.0.0.1:5500/david-vazquez/challenges/pokemon/components/detail/detail.html?pokemonName=${firstPokemon.name}`);
    });
  });
}
