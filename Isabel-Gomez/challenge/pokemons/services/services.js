const fetchPagePokemons = async (offsetNum, limitNum) => {
  const url = `https://pokeapi.co/api/v2/pokemon/?offset=${offsetNum}0&limit=${limitNum}`;
  const response = await fetch(url);
  const data = await response.json();
  return data;
};

const fetchDetailsPokemon = async (name) => {
  const url = `https://pokeapi.co/api/v2/pokemon/${name}/`;
  const response = await fetch(url);
  const data = await response.json();
  return data;
};
