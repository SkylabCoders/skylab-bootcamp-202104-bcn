function fetchSuperHeroes() {
fetch('./../../superHeroData.json')
  .then(response => response.json())
  .then(json => {
  const list = json;
  list.forEach(heroe => console.log(heroe.name));
  return list;
  })
};