const siteOfDashboard = document.getElementById("pokemon-select");
let MIN_PAG = 10;
let MAX_PAG = 10;

function createList(selector, item, text, link, pokemon){
    const containerPokemons = document.createElement(selector);
    const listOfPokemons = document.createElement(item);
    const itemPokemon = document.createElement(text);
    siteOfDashboard.appendChild(containerPokemons);
    containerPokemons.appendChild(listOfPokemons);
    listOfPokemons.appendChild(itemPokemon);
    itemPokemon.href = link;
    return itemPokemon.innerHTML = pokemon;
}

const detailOfPokemonClick = (name) => {
    const nameDetail = document.getElementById("class-pokemons");
    let title = document.createElement("h2");
    nameDetail.appendChild(title);
    title.innerHTML = name;
}
const detailingPokemon = (element, list, detail) => {
    let details = document.getElementById("class-pokemons");
    let listDetails = document.createElement(element);
    let especificDetails = document.createElement(list);
    details.appendChild(listDetails);
    listDetails.appendChild(especificDetails);
    especificDetails.innerHTML = detail;
}
const nextPokemons = () => {
    siteOfDashboard.innerHTML = "";
    MIN_PAG += 10;
    MAX_PAG += 10;
    getPokemon(MIN_PAG, MAX_PAG);
} 