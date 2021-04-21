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
    goToAction() {
        this.lastComment = 'I am Batman!'; //es una variable de clase => propiedad de la clase
        console.log(this.lastComment);
    }
}
let batman = new Heroe ('batman', 25, 'Gotham', 'money');
batman.goToAction();


