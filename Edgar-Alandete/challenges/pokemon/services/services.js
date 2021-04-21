const getPokemonById = async (pokemonId) => {
  try {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`);
    const pokemon = await response.json();
    return pokemon;
  } catch (error) {
    console.warning('-', error);
  }
};
