 function catchPokemonByOrder(order) {
    return `https://pokeapi.co/api/v2/pokemon/${order}/`
}

function createNode(elementType, fatherNode, classAtribute,innerData) {
    let newNode = document.createElement(`${elementType}`);
    newNode.className = (`'${classAtribute}'`);
    newNode.innerHTML = `'${innerData}'`;
    if (innerData === null) { } else { fatherNode.insertAdjacentElement('afterbegin', newNode); }
    return newNode
}

function insertCreature(url, propertyName, propertyOrder, propertySprite) {
    fetch(url)
        .then(response => response)
        .then(data => {
            let newdiv = createNode(div, fatherNode, classAtribute,innerData)
            let creatuteName = `${data.name}`;
            let creatuteOrder = `${data.order}`;
            let creatuteSprite = `${data.data.sprites.front_default}}`;

            
                // pokemonList.innerHTML = `
                // <p> </p >
                // <p> ${data.order}</p >
                // <img src ='${data.sprites.front_default}'/>
                // `;
            console.log(data);
        })
    .catch(e => console.error(e))

}