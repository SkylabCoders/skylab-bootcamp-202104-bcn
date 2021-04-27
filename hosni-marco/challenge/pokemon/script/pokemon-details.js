const pokemonClicked = getPokemonIDFromUrl(location.search);
setTitlePokemon(pokemonClicked);
getabilities(pokemonClicked, 'abilities');
getStats(pokemonClicked);
