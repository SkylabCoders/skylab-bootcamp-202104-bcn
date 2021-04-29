let fetch = async (url = `https://pokeapi.co/api/v2/pokemon/ditto`) => {
    try {
        let response = await fetch(url);
        return await response.json();
    } catch {
        store = {...oldStore};
        console.error('Algo salió mal');
    }
}