async function getPokeApiData() {
    const qty = 10;
    const current = 0;
   return await fetch(`https://pokeapi.co/api/v2/pokemon?offset=${current}&limit=${qty}`)
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        throw new Error('Something has failed', response.Error);
      })
      .then((responseJson) => {
        // pokemonMainData = responseJson();
        return responseJson;
      })
      .catch((error) => console.log(error));
  }
  