let pokemonMainData = null;
let previous = "";
let next = "";
let pokemons = null;

pokemonMainData = getPokeApiData().then(({previous, next, results}) => {
    setEnv(previous, next, results);
});

function setEnv(previous, next, data) {
    previous = previous;
    next = next;
    pokemons = data;
    initialContent(data);
}

function initialContent(data) {
    drawPokeList(data, 'pokelist');
}