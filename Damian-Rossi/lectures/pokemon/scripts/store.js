let pokemonMainData = null;
let store = {
    previous: "",
    next: "",
    pokemones: null,
    rowspercall: 10,
    currentIndex: 0,
    allowed: () => false,
    defaultFetchUrl: `https://pokeapi.co/api/v2/pokemon?limit=${rowspercall}&offset=${currentIndex}`
}

oldStore = {};
pokemonMainData = fetchListFromService();


let connected = new Promise((resolve, reject) => {
    let activeConnection = store.allowed();
    if(activeConnection) {
        resolve('sucess');
        // console.log('Connected');
        // fetchListFromService(store.defaultFetchUrl);
    }else {
        reject('connection refused');
        // console.error('Connection refused');
    }
});


function fetchListFromService(url) {
    connected.then(message => {
        console.log(';)', message);
        getPokeApiData().then(({previous, next, results}) => {
            setEnv(previous, next, results)
        });
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



