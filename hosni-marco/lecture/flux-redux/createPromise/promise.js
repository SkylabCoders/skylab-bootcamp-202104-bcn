const myFetch = new Promise((resolve, reject) => {
  if (true) {
    resolve({ name: asdasd, edad: asdasd });
  } else {
    reject(null);
  }
});
const pokelist = [];
  return fetch(asdasdasdasdasdasdasdasd)
    .then((response) => response.json())
    .then((pokes) => {
      pokelist = pokes.results;
    });

}
myFetch().then() = (pokelist) => {
    pokelist.forEach(poke => console.log(poke.name));
}