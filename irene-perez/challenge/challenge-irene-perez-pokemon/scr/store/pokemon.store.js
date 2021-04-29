const pokeArray = getPokemons('https://pokeapi.co/api/v2/pokemon?limit=100&offset=200');

async function getPokemons(url) {
  const list = await fetch(url);
  return await list.json();
}
