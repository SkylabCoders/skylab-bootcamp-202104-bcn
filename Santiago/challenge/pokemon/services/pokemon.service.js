const obtainAllPokemons = async () => {
  const pokemonsData = await fetch('https://pokeapi.co/api/v2/pokemon');
  const pokemons = await pokemonsData.json();
  console.log(pokemons);
};
