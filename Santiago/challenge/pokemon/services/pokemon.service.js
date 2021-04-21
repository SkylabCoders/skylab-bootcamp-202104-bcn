const getPokemonData = () => fetch('https://pokeapi.co/api/v2/pokemon')
  .then((response) => response.json())
  .then((data) => data.results.forEach((element) => console.log(element.name)));
