function fetchHeroes() {
    return fetch(`../../store/store.json`)
        .then(response => response.json())
        .then(data => console.log(data))
}

