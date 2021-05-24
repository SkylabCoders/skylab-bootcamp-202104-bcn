var Skylaber = /** @class */ (function () {
    function Skylaber(firstName, middleInitial, lastName) {
        this.firstName = firstName;
        this.middleInitial = middleInitial;
        this.lastName = lastName;
        this.fullName = firstName + " " + middleInitial + " " + lastName;
    }
    return Skylaber;
}());
function greeter(person) {
    return "Hello " + person.fullName;
}
var user = new Skylaber('Fer', 'G', 'Gomez');
document.body.innerHTML = greeter(user);
