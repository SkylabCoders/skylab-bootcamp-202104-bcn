function fetchSuperHeroes() {
return fetch('./../../superHeroData.json')
  .then(response => response.json())
  };
