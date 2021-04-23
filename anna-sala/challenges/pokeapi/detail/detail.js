const pokemonPage = new URLSearchParams(window.location.search).get('pokemonName');

function fetchApi(callback) {
  return fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonPage}`)
    .then((response) =>
       if(response.ok)
          response.json())
        else{
          throw newError;
    }
  )
    .then((data) => callback(data))
    .catch(error => console.error('Error:', error));
}
function iterationDetail(obj) {
  printOnPage('h2', `${obj.name}`, `${obj.name}`);
  pokeImages(`${obj.name}`, `${obj.sprites.front_default}`);
}
fetchApi(iterationDetail);

function pokeImages(idName, url) {
  const figure = document.createElement('fig');
  const img = document.createElement('img');
  img.setAttribute('id', idName);
  img.setAttribute('src', url);
  figure.appendChild(img);
  main.appendChild(figure);
}
