var Skylaber = /** @class */ (function () {
    function Skylaber(firstname, lastname, middleInitial) {
        this.firstname = firstname;
        this.lastname = lastname;
        this.middleInitial = middleInitial;
        this.fullname = firstname + " " + middleInitial + " " + lastname;
    }
    return Skylaber;
}());
function greeter(person) {
    return "Hello " + person.firstname + " " + person.lastname;
}
var user = new Skylaber();
document.body.innerHTML = greeter(user);
