const getPokemonList = async () => {
  const pokemons = await fetch('https://pokeapi.co/api/v2/pokemon/');
  const pokemonList = await pokemons.json();
  pokemonList.results.forEach((element) => {
    createList(element.name);
  });
};

const getabilities = async (URLname, list) => {
  const pokemons = await fetch(`https://pokeapi.co/api/v2/pokemon/${URLname}`);
  const pokemonList = await pokemons.json();
  pokemonList.abilities.forEach((element) => {
    setAtributes(list, element.ability.name);
  });
};

const getStats = async (URLname) => {
  const pokemons = await fetch(`https://pokeapi.co/api/v2/pokemon/${URLname}`);
  const pokemonList = await pokemons.json();
  pokemonList.stats.forEach((element) => {
    setTable(element.stat.name, element.base_stat);
  });
};

function getPokemonIDFromUrl(url) {
  return new URLSearchParams(url).get('name');
}
