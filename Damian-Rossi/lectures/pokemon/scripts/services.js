async function getPokeApiData (url = store.defaultFetchUrl){
    return await fetch(url)
        .then((response) => {
            return response.json();
            
        })
        .then(responseJson => {
            // pokemonMainData = responseJson;
            return responseJson;
        })
        .catch(error => {
            store = oldStore;
            console.log(error)
        });
    
}

let otrofech = async (url = store.defaultFetchUrl) =>{
    try {
        let response = await fetch(url);
        return await response.json();
         
    } catch {
        store = { ...oldStore };
        console.error('algo maliò sal');
    }
    
}

// function getUrlPara(url = null) {
//     let valueToSearch = url ? url : location.search;
//     let paramValue = new URLSearchParams(window)
// }