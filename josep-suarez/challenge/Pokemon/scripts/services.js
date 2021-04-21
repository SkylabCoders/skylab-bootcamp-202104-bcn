const siteOfDashboard = document.getElementById("pokemon-select");

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
    let title = document.createElement("h3");
    nameDetail.appendChild(title);
    title.innerHTML = name;
}
const detailingPokemon = (element, list, detail) => {
    let details = document.getElementById("detailing");
    let listDetails = document.createElement(element);
    let especificDetails = document.createElement(list);
    details.appendChild(listDetails);
    listDetails.appendChild(especificDetails);
    especificDetails.innerHTML = detail;
}