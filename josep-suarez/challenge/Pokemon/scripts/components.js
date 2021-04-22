       const getPokemon = (offset,limit) => {
        return fetch(`https://pokeapi.co/api/v2/pokemon/?offset=${offset}&limit=${limit}`)
        .then((response)=>{
           return response.json();
        })
        .then(data => { 
            data.results.forEach(pokemon => {
                createList("li" ,"a" ,`.././details/details.html?name=${pokemon.name}`,pokemon.name);
                photosPokemon(pokemon.url,`.././details/details.html?name=${pokemon.name}`);
            })
        })
    }

    function getPokemonIDFromUrl(url) {
        return new URLSearchParams(url).get('name');
    }
    
    const pokemonDetail = () => {
        let pokemonClicked= getPokemonIDFromUrl(location.search);
        detailOfPokemonClick(pokemonClicked)
        let url = `https://pokeapi.co/api/v2/pokemon/${pokemonClicked}`;
        paintDetailsOfPokemonClicked(url);
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
     const photosPokemon = (url,href) => {
        return fetch(url)
        .then((response)=>{
            return response.json();
         })
         .then(data => { 
            let image = document.getElementById("photos-pokemon");
            let photo = document.createElement("p");
            let imagePokemon = image.appendChild(photo);
            photo.setAttribute("id","pokeimagen");
            imagePokemon.innerHTML = `<img src=${data.sprites.front_default}>`
            imagePokemon.addEventListener("click", () => {
                window.location.replace(href);
            })
         })
     }


