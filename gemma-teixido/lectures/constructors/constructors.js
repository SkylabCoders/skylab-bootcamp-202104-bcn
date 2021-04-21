let heroe = {
    heroeName = 'Spiderman',
    age = 17,
    city = "New York"
}

function createHero(heroName, age, city) {
    return {heroeName, age, city}
}

let spiderman = createHero('spiderman', 17, 'New York');

// la clase se escribe siempre con capitalize letter
class Heroe {
    constructor(heroeName, age, city, specialPower = null) {
        this.heroeName = heroeName;
        this.age = age;
        this.city = city;
        this.specialPower = specialPower;
    }
    lastComment = ''; //inicializar primero siempre para evitar errores
    if (batisenyal) {
        this.goToAction();
    }
    goToAction() {
        this.lastComment = 'Stop I am Batman!';
    }
}