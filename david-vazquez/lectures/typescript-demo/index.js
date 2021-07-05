var Skylaber = /** @class */ (function () {
    function Skylaber(firstName, middleInitial, lastName) {
        this.firstName = firstName;
        this.middleInitial = middleInitial;
        this.lastName = lastName;
        this.fullName = "" + firstName + middleInitial + lastName;
    }
    return Skylaber;
}());
function greeter(person) {
    return "Hello " + person.firstName + " " + person.lastName;
}
var user = new Skylaber('Jane', 'M', 'User');
document.body.innerText = greeter(user);
