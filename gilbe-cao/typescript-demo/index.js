var Skylaber = /** @class */ (function () {
    function Skylaber(firstname, middleinitial, lastname) {
        this.firstname = firstname;
        this.middleinitial = middleinitial;
        this.lastname = lastname;
        this.fullname = this.firstname + " " + middleinitial + " " + lastname;
    }
    return Skylaber;
}());
function greeter(person) {
    return "Hello " + person.firstname + " " + person.lastname;
}
var user = new Skylaber('Jane', 'M', 'User');
document.body.innerHTML = greeter(user);
