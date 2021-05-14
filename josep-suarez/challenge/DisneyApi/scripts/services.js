const apiDisney = "https://api.disneyapi.dev/characters"

const getApiData = (api) => {
    return fetch(api)
    .then(response => response.json())
    .then((data) => {
        data.data.slice(1,31).forEach(element => {
            if(element !== []){
                console.log(element);
                paintFilms(element.name, element.createdAt, element.sourceUrl, element.url);
            }
        });
    })
    .catch((e)=> console.error(e));
} 
getApiData(apiDisney);

const paintFilms = (name, createdAt, url, api) => {
    listFilms.appendChild(filmsDisney);
    filmsDisney.innerHTML += name + "</br>" + createdAt+"</br>" + url + "</br>";
    getImageFromApi(api);
}
const getImageFromApi = (api) => {
    return fetch(api)
    .then (response => response.json())
    .then((data) => {
        listFilms.appendChild(filmsDisney);
        filmsDisney.innerHTML += `<img src="${data.imageUrl}>`;
    })
}