let pokemonMainData = null;
let store = {
    previous: "",
    next: "",
    pokemons: null,
    rowsPerCall: 10,
    currentIndex: 0,
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
    drawPokeList(data);
}