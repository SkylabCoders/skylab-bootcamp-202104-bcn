function getHeroIDFromUrl(url) {
    return new URLSearchParams(url).get('heroID');
}


function fetcHeroes(){
    return fetch('./assets/superHeroData.json')
        .then(response => response.json())
        .then(data => console.log(data));
}