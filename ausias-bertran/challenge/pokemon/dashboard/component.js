let main = createNode('div', document.body, 'main-box',null)




fetch('https://pokeapi.co/api/v2/pokemon/')
.then(response => response.json())
    .then(data => {
    
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










