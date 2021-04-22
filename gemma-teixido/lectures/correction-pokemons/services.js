async function getPokeApiData(url = `https://pokeapi.co/api/v2/pokemon?offset=${current}&limit=${qty}`) {
   return await fetch(url)
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
  }''