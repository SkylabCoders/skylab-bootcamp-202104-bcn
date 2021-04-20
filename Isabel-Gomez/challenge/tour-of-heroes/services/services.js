function fetchHeroes(url) {
  fetch(url).then((response) => response.json())
    .then((data) => data);
}
fetchHeroes('../../store/superHeroData.json');
