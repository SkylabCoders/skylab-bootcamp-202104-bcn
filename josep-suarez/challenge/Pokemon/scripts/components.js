       const getPokemon = (offset,limit) => {
        return fetch(`https://pokeapi.co/api/v2/pokemon/?offset=${offset}&limit=${limit}`)
        .then((response)=>{
           return response.json();
        })
        .then(data => { 
            data.results.forEach(pokemon => {
                createList("li" ,"a" ,`.././details/details.html?name=${pokemon.name}`,pokemon.name);
            })
        })
    }

    function getPokemonIDFromUrl(url) {
        return new URLSearchParams(url).get('name');
    }
    
    const pokemonDetail = () => {
        let pokemonClicked= getPokemonIDFromUrl(location.search);
        detailOfPokemonClick(pokemonClicked)
        return fetch("https://pokeapi.co/api/v2/pokemon/?offset=30&limit=30")
        .then((response)=>{
            return response.json();
         })
         .then(data => { 
             data.results.forEach(pokemon => {
                 if(pokemon.name === pokemonClicked){
                     paintDetailsOfPokemonClicked(pokemon.url);
                 }
             })
         })
     }
    
     const paintDetailsOfPokemonClicked = (url) => {
            return fetch(url)
            .then((response)=>{
                return response.json();
             })
             .then(data => { 
                detailingPokemon("ul","li","height: "+data.height);
                detailingPokemon("ul","li", "weight: "+data.weight);
                detailingPokemon("ul","li", "order: "+data.order);
                detailingPokemon("ul","li", "id: "+data.id);
                detailingPokemon("ul","li", "hability: "+data.abilities[0].ability.name);
                detailingPokemon("ul","li", `<img src=${data.sprites.front_default}>`);
                detailingPokemon("ul","li", `<img src=${data.sprites.back_default}>`);
             })
     }


