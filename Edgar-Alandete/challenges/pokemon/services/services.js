const getPokemonById = async (pokemonId) => {
  try {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`);
    const pokemon = await response.json();
    return pokemon;
  } catch (error) {
    console.error('-', error);
  }
};

const getPokemons = async (limit, set) => {
  try {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${set}`);
    const pokemons = await response.json();
    return pokemons;
  } catch (error) {
    console.error('-', error);
  }
};
