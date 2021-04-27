function fetchPokemon(url) {
  return fetch(url)
    .then((response) => response.json());
}
