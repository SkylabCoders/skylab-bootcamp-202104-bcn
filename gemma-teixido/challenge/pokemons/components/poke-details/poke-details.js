const div = document.querySelector('.div');

function creationOfHeader() {
  const header = createElements('header', div, null, null);
  const titleImportant = createElements('h1', header, null, 'Pokemon Details');
  const pokeName = new URLSearchParams(window.location.search).get('name');
  const pokemons = (`https://pokeapi.co/api/v2/pokemon/${pokeName}`);
  const pokeNameDetails = createElements('h3', header, null, `${pokeName}`);
}
