const div = document.querySelector('.div');

function creationOfHeader() {
  const header = createElements('header', div, null, null);
  const titleImportant = createElements('h1', header, null, 'Pokemon Details');
  const dashboard = createElements('a', header, null, 'Dashboard');
  const list = createElements('a', header, null, 'List');
  divListPokemons();
}
