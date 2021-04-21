let heroe = {
    heroeName = 'Spiderman',
    age = 17,
    city = "New York"
}

function createHero(heroName, age, city) {
    return {heroeName, age, city}
}

let spiderman = createHero('spiderman', 17, 'New York');