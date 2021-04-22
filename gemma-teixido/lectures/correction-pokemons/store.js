let pokemonMainData = null;
const qty = 10;
const current = 0;
let store = {
    previous: "",
    next: "",
    pokemons: null,
}

pokemonMainData = fetchListFromService();

function fetchListFromService(url) {
    pokemonMainData = getPokeApiData().then(({previous, next, results}) => {
        
        setEnv(previous, next, results);
    });
}

function setEnv(previous, next, data) {
    store = {
        previous: previous,
        next: next,
        pokemons: data,
    }
    setContent(data);
}

function setContent(data) {
    drawPokeList(data, 'pokelist');
}