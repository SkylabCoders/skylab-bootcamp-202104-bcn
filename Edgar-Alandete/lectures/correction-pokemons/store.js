let pokemonMainData = null;
let store = {
    previous: "",
    next: "",
    pokemons: null,
    rowspercall: 10,
    currentIndex: 0,
    allowed: () => false,
    defaultFetchUrl : `https://pokeapi.co/api/v2/pokemon?limit=${rowspercall}&offset=${currentIndex}`
}

pokemonMainData = fetchListFromService();

let connected = new Promise((resolve, reject) => {
    let isActiveConnection = allowed();
    if(isActiveConnection) {
        resolve('sucess');
        console.log('Connected');
        fetchListFromService(store.defaultFetchUrl)
    }else {
        reject('connection refused')
        // console.error('Connection refused')
    }
});

function fetchListFromService(url) {
    connected.then(message => {
        console.log(';)', message)
        getPokeApiData().then(({previous, next, results}) => {
            setEnv(previous, next, results);
        });
    })
}


function setEnv(previous, next, data) {
    let newStore = {...store};

    newStore.previous= previous;
    newStore.next= next;
    newStore.pokemons= data;

    oldStore = {...store};
    store = {...newStore}

    setContent(data);
}

function setContent(data) {
    drawPokeList(data);
}