const pokemonList = document.getElementById('pokemon-list');
const url = 'https://pokeapi.co/a';

console.log(url);






const url = 'https://pokeapi.co/api/v2/pokemon/75/';
const url1 = 'https://pokeapi.co/api/v2/pokemon/22/';
const url2 = 'https://pokeapi.co/api/v2/pokemon/123/';



fetch(catchPokemonByOrder(75))
.then(response => response.json())
.then(data => {
    pokemonList.innerHTML = `
    <p> ${data.name }</p >
    <p> ${data.order}</p >
    <img src ='${data.sprites.front_default}'/>
    `;
    console.log(data);
})
    .catch(e => console.log(e))

fetch(url1)
.then(response => response.json())
.then(data => {
    pokemonList.innerHTML += `
    <p> ${data.name }</p >
    <p> ${data.order}</p >
    <img src ='${data.sprites.front_default}'/>
    `;
    console.log(data);
})
.catch(e => console.log(e))
fetch(url2)
.then(response => response.json())
.then(data => {
    pokemonList.innerHTML += `
    <p> ${data.name }</p >
    <p> ${data.order}</p >
    <img src ='${data.sprites.front_default}'/>
    `;
    console.log(data);
})
.catch(e => console.log(e))










function catchPokemonByOrder(order) {
    return `https://pokeapi.co/api/v2/pokemon/${order}/`
}