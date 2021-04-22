const pokemonPage = new URLSearchParams(window.location.search).get('pokemonName');

function fetchApi(callback) {
  return fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonPage}`)
    .then((response) => response.json())
    .then((data) => callback(data));
}
function iterationDetail(obj) {
  // obj.forEach((element) => {
  printOnPage('h2', `${obj.name}`, `${obj.name}`);
  // });
}
fetchApi(iterationDetail);
