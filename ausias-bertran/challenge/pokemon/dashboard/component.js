let main = createNode('div', document.body, 'main-box', null);
let list = createNode('ul', main, 'list', null);



insertCreature('https://pokeapi.co/api/v2/pokemon/3/');





fetch('https://pokeapi.co/')
.then(response => response.json())
    .then(data => {
    
    console.log(data);
})
    .catch(e => console.log(e))

fetch(url3)
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










