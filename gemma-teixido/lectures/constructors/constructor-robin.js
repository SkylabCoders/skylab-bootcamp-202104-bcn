class Heroe { // la clase se escribe siempre con capitalize letter
    constructor(heroeName, age, city, specialPower = null) {
        this.heroeName = heroeName;
        this.age = age;
        this.city = city;
        this.specialPower = specialPower;
    }
    lastComment = ''; //inicializar primero siempre para evitar errores
    if (condicionTrue) {
        this.goToAction();
    }
    goToAction = (message) => {
        let newMessage = message => { //es una variable de clase => propiedad de la clase
        function talk() {
            console.log(this.lastComment);
        }
        talk();
        console.log(this.lastComment);      
        }
    }
}

let robin = new Heroe('Robin', 16, 'Gotham', 'sidekik');

robin.goToAction('Santas cantimploras, Batman!').talk();