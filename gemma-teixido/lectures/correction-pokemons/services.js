async function getPokeApiData(url = `https://pokeapi.co/api/v2/pokemon?limit=${store.rowspercall}&offset=${store.currentIndex}`) {
   return await fetch(url)
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        throw new Error('Something has failed', response.Error);
      })
      .then((responseJson) => {
        return responseJson;
      })
      .catch((error) => console.log(error));
  }