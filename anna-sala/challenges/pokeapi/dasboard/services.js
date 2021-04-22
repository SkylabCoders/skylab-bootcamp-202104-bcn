function fetchApi(callback) {
  return fetch('https://pokeapi.co/api/v2/pokemon')
    .then((response) => response.json())
    .then((data) => callback(data.results.slice(0, 5)));
}
function iteration(obj) {
  obj.forEach((element) => {
    printOnPage('a', element.name, `${element.name}`, `./../detail/detail.html?pokemonName=${element.name}`);
  });
}
fetchApi(iteration);
