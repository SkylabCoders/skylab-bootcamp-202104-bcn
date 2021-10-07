var Skylaber = /** @class */ (function () {
    function Skylaber(firstName, middleInitial, lastname) {
        this.firstName = firstName;
        this.middleInitial = middleInitial;
        this.lastname = lastname;
        this.fullName = this.firstName + " " + this.middleInitial + " " + this.lastname;
    }
    return Skylaber;
}());
function greeter(person) {
    return "Hello " + person.firstName + " " + person.lastName;
}
var user = { firstName: 'Jane', lastName: 'User' };
document.body.innerHTML = greeter(user);
