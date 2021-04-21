const siteOfDashboard = document.getElementById("pokemon-select");

function createList(selector, item, text, link, pokemon){
const containerPokemons = document.createElement(selector);
const listOfPokemons = document.createElement(item);
const itemPokemon = document.createElement(text);
siteOfDashboard.appendChild(containerPokemons);
containerPokemons.appendChild(listOfPokemons);
listOfPokemons.appendChild(itemPokemon);
listOfPokemons.href = link;
return itemPokemon.innerHTML = pokemon;
}

