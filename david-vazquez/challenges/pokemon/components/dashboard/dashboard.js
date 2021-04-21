const body = document.querySelector('.body');

function createHeader() {
  const header = createHtmlElements(body, 'header', 'header', null);
  const headerTitle = createHtmlElements(header, 'h1', 'header__title', 'POKEMON');
  const navBar = createHtmlElements(header, 'ul', 'header__navbar', null);
  createNavButton(navBar, 'Dashboard', './dashboard.html');
  createNavButton(navBar, 'List', './../list/list.html');
  createMain();
}

function createNavButton(parent, text, url) {
  const navButton = createHtmlElements(parent, 'li', 'navbar__button', null);
  const navLink = createHtmlElements(navButton, 'a', null, text);
  navLink.setAttribute('href', url);
}

function createMain() {
  const dashboard = createHtmlElements(body, 'main', 'dashboard', null);
  const dashboardTitle = createHtmlElements(dashboard, 'h2', 'dashboard__tittle', 'My Pokemons');
  const dashboardList = createHtmlElements(dashboard, 'ul', 'dashboard__top', null);
  const myPokemons = getData();
  myPokemons.then((element) => {
    element.results.slice(1, 5).forEach((firstPokemon) => {
      const pokemon = createHtmlElements(dashboardList, 'li', 'dashboarad__top__item', null);
      const myPokemonsDetail = getDataPokemon(firstPokemon.name);
      myPokemonsDetail.then((element) => {
        const pokemonPic = createHtmlElements(pokemon, 'img', 'pokemon-detail__image', null);
        pokemonPic.setAttribute('src', `${element.sprites.front_default}`);
      });
      const firstPokemonNames = createHtmlElements(pokemon, 'a', null, `${firstPokemon.name}`);
      firstPokemonNames.setAttribute('href', `http://127.0.0.1:5500/david-vazquez/challenges/pokemon/components/detail/detail.html?pokemonName=${firstPokemon.name}`);
    });
  });
}
