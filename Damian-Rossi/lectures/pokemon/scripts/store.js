let pokemonMainData = null;
let store = {
    previous: "",
    next: "",
    pokemones: null,
    rowspercall: 10,
    currentIndex: 0,
    allowed: () => true,
    defaultFetchUrl: `https://pokeapi.co/api/v2/pokemon?limit=${rowspercall =10}&offset=${currentIndex = 0}`
}

oldStore = {};

let isUserConnected = new Promise((resolve, reject) => {
    let activeConnection = store.allowed();
    if(activeConnection) {
        resolve(true);
    }else {
        reject(drawError('You are not connected'));
    }
});

pokemonMainData = fetchListFromService();
function fetchListFromService(url = store.url) {
    isUserConnected.then((isActive) => {
        if(isActive) {
            getPokeApiData().then(({previous, next, results}) => {
                setEnv(previous, next, results)
            });
        }
    }).catch(errorMessage => console.error(errorMessage));
}

function setEnv(previous, next, data) {
    let newStore = {...store};
    newStore.previous= previous;
    newStore.next= next;
    newStore.pokemones= data;
    
    oldStore = {...store };
    store = { ...newStore };
    setContent(data);
}

function setContent(data)
{
    drawPokelist(data);
}
