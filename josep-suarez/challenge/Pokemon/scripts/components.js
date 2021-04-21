       const getPokemon = () => {
        return fetch("https://pokeapi.co/api/v2/pokemon/")
        .then((response)=>{
           return response.json();
        })
        .then(data => { 
            console.log(data.results);
            data.results.forEach(pokemon => {
                console.log(pokemon);
                createList("ul","li","a",pokemon.url,pokemon.name);
            })
        })
    }