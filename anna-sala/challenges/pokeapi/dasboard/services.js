function fetchApi(callback) {
  return fetch('https://pokeapi.co/api/v2/pokemon')
    .then((response) => response.json())
    .then((data) => callback(data.results.slice(0, 5)));
}
