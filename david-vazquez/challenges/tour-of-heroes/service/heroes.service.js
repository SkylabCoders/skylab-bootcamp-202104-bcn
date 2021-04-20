function fetchHeroes(){
    return fetch('./../../store/superHeroData.json')
    .then(response => response.json())  
};
